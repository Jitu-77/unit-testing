import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent {
  constructor(private route : Router){}
  title:any 
  onRoute(){
    this.route.navigateByUrl('/home')
  }
}
