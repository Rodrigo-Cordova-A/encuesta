import { Component, OnInit} from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit{
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  enteredText!: string;

  OnBtnClick(){
    this.dataService.raiseDataEmitterEvent(this.enteredText)
  }
}

