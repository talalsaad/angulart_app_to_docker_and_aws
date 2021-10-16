import { Component, HostListener,Input   } from '@angular/core';
import { ViewService } from '../view.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  {
 nameo;
 counter=0;
 isActive=true;

  numberOfClicks: any;
 
@HostListener('click', ['$event.target'])foo(e:any){
switch(e.id)
{
case "view_back":
  this.counter--;
  
    if(this.counter<0){
      this.counter=this.nameo.length-1;
    }  break;

case "view_next":
  this.counter++;
  if(this.counter>=this.nameo.length){
    this.counter=0;
  }  break;
default:
  if(this.isActive == true) this.isActive = false;
  else this.isActive = true;

    


    break;




}

}
   onclicko=():any=> {
    this.counter++;
    if(this.counter>=this.nameo.length){
      this.counter=0;
      console.log(this.counter);  
    }  
    
  }

  constructor(service:ViewService) { 
    this.nameo=service.countryList;
    
  }

   

 
}
