import { Component, EventEmitter, Input, Output, OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy  {
  @Input ("searchResult") lists:[];
  @Output() del: EventEmitter<number> = new EventEmitter();
  
  constructor() {}

  changeColor(event){
    event.target.style.background = 'coral';
  }

  recoverColor(event){
    event.target.style.background = 'white';
  }

  deleteItem(index){
    this.del.emit(index);
  }
  ngOnInit(): void {
    console.log("list init");
  }
  ngOnChanges():void{
    console.log("list bound input property changes");
  }
  ngDoCheck():void{
    console.log("list do check");
  }
  ngAfterContentInit():void{
    console.log("list content has been projected into the view")
  }
  ngAfterContentChecked():void{
    console.log("list view projected content has been checked ");
  }
  ngAfterViewInit():void{
    console.log("list view init");
  }
  ngAfterViewChecked():void{
    console.log("list view do check");
  }
  ngOnDestroy():void{
    console.log("list destroy");
  }

}
