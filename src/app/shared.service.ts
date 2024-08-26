import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log("shared service constructor")
  }

  sharedFunction(){
    console.log("shared functions called")
  }
}
