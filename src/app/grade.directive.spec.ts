import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GradeDirective } from './grade.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {
  // we need to use beforeEach to access the respective components dom
  //by using fixture 
  // as this is async so the beforeEach element must be of type waitForAsync

  let component:AppComponent
  let fixture :ComponentFixture<AppComponent>
  let el:DebugElement

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      imports:[AppComponent,GradeDirective]
    })
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
    fixture.detectChanges()
  }))
  it('should create an instance', () => {
    //to test a directive we need to create a mock element 
    //pass the mock element in newGradeDirective
    let mockElRef = {
      nativeElement :  document.createElement('div')
    }
    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });
  it('should change the text color on mouse hover', () => {
    let  divList = el.queryAll(By.css('p'))
    let div0 = divList[0]
    let div1 = divList[1]
    let div2 = divList[2]
    let div3 = divList[3]
    let div4 = divList[4]
    let div5 = divList[5]
    div0.triggerEventHandler('mouseenter',{})
    fixture.detectChanges()
    expect(div0.nativeElement.style.color).toBe('red')
  });
});
