import { Injectable } from '@angular/core';
import dummy from '../assets/dummy.json'

@Injectable({
  providedIn: 'root'
})
export class ViewService {
   
   countryList:{name:string, code:string, img:string}[] = dummy;




}
