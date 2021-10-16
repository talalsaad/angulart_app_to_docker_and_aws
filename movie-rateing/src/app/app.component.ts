import { Component, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { throwError } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


  

})



export class AppComponent   {
  
  title = 'movie-rateing';
 
}


