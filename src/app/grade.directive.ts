import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGrade]',
  standalone: true
})
export class GradeDirective {
  @Input() marks = 0 

  constructor(private el :ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    if(this.marks>89){
      this.el.nativeElement.style.color = 'green'
    }else if(this.marks>79 && this.marks<89){
      this.el.nativeElement.style.color = 'blue'
    }else{
      this.el.nativeElement.style.color = 'red'
    }
  }
  @HostListener('mouseleave') onMouseLeave(){
      this.el.nativeElement.style.color = 'black'
  }
}
