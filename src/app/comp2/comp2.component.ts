import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject, filter, map, of, combineLatest } from "rxjs";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{
  constructor(private dataService:DataService){

  }
  spieler = [
    { id: 1, name: 'Rotinca', isActive: true},
    { id: 2, name: 'Rotian', isActive: true},
    { id: 3, name: 'Mike', isActive: false},
    { id: 4, name: 'Rex', isActive: true},
  ];
  user$ = new BehaviorSubject <{id: string; name: string} | null>(null);

  spieler$ = of(this.spieler);
  spielername$ = this.spieler$.pipe(map((spieler) => spieler.map((user) => user.name)));
  namengefiltered$ = this.spieler$.pipe(
    map((spieler) => spieler.filter((spiel) => spiel.isActive)),
    map((spieler) => spieler.map((spiel) => spiel.name))
  );
  data$ = combineLatest([
    this.spieler$,
    this.spielername$,
    this.namengefiltered$
  ]).pipe(map(([spieler, spielernamen, namengefiltered]) => ({
    spieler,
    spielernamen,
    namengefiltered
  }))
  );
    ngOnInit(): void {
      setTimeout(() => {
        this.user$.next({ id: '5', name: 'Rotianaldo'});
        this.user$.next({ id: '6', name: 'Rotialdo'});
        this.user$.next({ id: '8', name: 'Roanaldo'});
      }, 2000);
      this.user$.subscribe(user => {
        console.log('userando', user)
      })
    this.dataService.dataEmitter.subscribe((value)=>{
      this.inputText = value
    })
  }
  inputText!: string;
}
