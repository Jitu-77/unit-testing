import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor( private shared:SharedService) { }

  multiply(a:any,b:any){
      this.shared.sharedFunction()
      return a*b
  }
  add(a:any,b:any){
      this.shared.sharedFunction()
      return a + b
  }
}
