import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  name = 'john smith';
  currentVal = '';
  getName(name:string){
   alert(name)
  }
  getEvent(evt:string){
    console.warn(evt)
  }
  getVal(evt:string){
    return this.currentVal = evt;
  }
  disabledBox = true;
  enableBox(){
    this.disabledBox = false;

  }
  
  obj ={
    name:'anil',
    age:20
  }
  arr = ['peter','smith','root'];

  a = 100;
  b = 200;

  siteUrl = window.location.href;
}
