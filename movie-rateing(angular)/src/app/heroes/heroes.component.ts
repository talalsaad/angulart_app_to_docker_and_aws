import { Component, HostListener, OnInit, Renderer2  } from '@angular/core';
import { ViewComponent } from '../view/view.component';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  htmlString: string|undefined;

 
  @HostListener("mouseover") asd(){
    
console.log("yes");
this.htmlString=`<br>

<a class="show_menu" >newworking</a>
<br>

<a Class="show_menu">web div</a>
<br>

<a Class="show_menu">random</a>
<br>
<a Class="show_menu">about us</a>
`

}
@HostListener("mouseleave") asdout(){
  
  console.log("noo");
  this.htmlString = undefined;
  
  }

  
}
