import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,from,  of, map, filter} from "rxjs";
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'encuesta';
  constructor(private dataService: DataService){
    
  }
  // openDialog(){
  //   this.dialogRef.open(DialogComponent, {
  //     width: '400px',
  //     backdropClass: 'backdrop-style'
  //   });
  // }
  // myObservable = new Observable((observer)=>{
  //   console.log('Started')
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   // setTimeout(()=>{observer.error(new Error('Mistakes were made'))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()},6000)


    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")

//  });
  myObservable = new Observable((observer) => {
    setTimeout(()=>{observer.next("A")},1000)
    setTimeout(()=>{observer.next("B")},2000)
    setTimeout(()=>{observer.next("C")},3000)
    setTimeout(()=>{observer.error(new Error('Mistakes were made'))},3000)
    setTimeout(()=>{observer.next("5")},5000)
    setTimeout(()=>{observer.complete()},6000)
  });

  array1 = [1,5,12,6,17];
  array2 = ['A','D','F','P'];

  myObservable2 = of(this.array1, this.array2,9,3,'pop');

  myObservable3 = from(this.array1);

  MultipliedObser = this.myObservable3.pipe(map((val)=> {
    return val*4;
  }));

  filteredObser = this.MultipliedObser.pipe(filter((val)=>{
    return val >= 30
  }))

  ngOnInit(){
    // this.filteredObser.subscribe((val)=>{
    //   console.log(val);
    // }, (error)=> {
    //   alert(error.message)
    // }, () => {
    //   alert('Observable has complete values')
    // }
    // );
  }
}
