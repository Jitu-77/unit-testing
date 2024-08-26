import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }
  getAllUSers(){
    return this.http.get('api/all')
  }
  getUSersById(id:any){
    return this.http.get('api/all/'+id)
  }
}
