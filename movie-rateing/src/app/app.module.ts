import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ViewComponent } from './view/view.component';
import { ViewService } from './view.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    HeroesComponent,
    ViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
