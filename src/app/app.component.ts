import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarksPipe } from './marks.pipe';
import { GradeDirective } from './grade.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MarksPipe,GradeDirective],
  // declarations:[MarksPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSubscribed = false
  title = 'unit-testing';
  name ='subscribe'
  marksList = [90,99,42,87,75,23,66]
  subscribe(){
    //scenario 2
    // this.isSubscribed = true
    // this.name = 'subscribed'

    //scenario 3 API CALL
    setTimeout(()=>{
    this.isSubscribed = true
    this.name = 'subscribed'
    },3000)
  }
}
