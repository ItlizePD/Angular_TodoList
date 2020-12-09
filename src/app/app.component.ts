import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked,AfterViewInit,OnDestroy{
  title = 'TodoList';
  lists = []; 
  searchResult = [];
  restResult = [];
  newItem; 
  search="";

  constructor() {}

  addList() { 
    this.search = '';
    if (this.newItem == '') { 
      alert("The list is empty")
    } 
    else { 
        this.lists.push(this.newItem); 
        this.newItem = ''; 
    } 
    this.searchItem();
  } 

  searchItem(){
    this.searchResult = [];
    this.restResult = [];
    if(this.search=='') {
      this.searchResult = this.lists;
    }
    else{
      for (let item of this.lists){
        item = String(item);
        if(item.startsWith(this.search)){
          this.searchResult.push(item);
        }else{
          this.restResult.push(item);
        }
      }
    }
  }

  delete(index){
    this.searchResult.splice(index,1);
    this.lists = this.restResult.concat(this.searchResult);  
  }

  ngOnInit(): void {
    console.log("app init");
  }
  ngOnChanges():void{
    console.log("app bound input property changes");
  }
  ngDoCheck():void{
    console.log("app do check");
  }
  ngAfterContentInit():void{
    console.log("app content has been projected into the view")
  }
  ngAfterContentChecked():void{
    console.log("app view projected content has been checked ");
  }
  ngAfterViewInit():void{
    console.log("app view init");
  }
  ngAfterViewChecked():void{
    console.log("app view do check");
  }
  ngOnDestroy():void{
    console.log("app destroy");
  }
  
}
