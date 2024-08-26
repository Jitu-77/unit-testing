import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MarksPipe } from './marks.pipe';

describe('AppComponent', () => {
  // first step for component testing
  let fixtures :ComponentFixture<AppComponent>
  let el:DebugElement
  let component : AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,MarksPipe],
    }).compileComponents().then(()=>{
      //2nd step for component testing
      fixtures = TestBed.createComponent(AppComponent)
      el = fixtures.debugElement
      component = fixtures.componentInstance 
    })
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'unit-testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });
  //scenario 1
  // it('should have a button with button click disable must be active', () => {
  //   const elem = el.queryAll(By.css('.btn'))
  //   component.isSubscribed =false
  //   component.name="subscribe"
  //   elem[0].nativeElement.click()
  //   fixtures.detectChanges();
  //   expect(elem[0].nativeElement.disabled).toBeTrue()
  //   expect(component.name).toBe('subscribed')
  // });
  //scenario 2
  //  when we are using *ngIF we are changing the variables dynamically 
  //so need to handle such scenarios with care , 
  //instead of const use let 
  //frequent use of detect Changes()
  //re initialization of variables
  // it('should have a button with button click disable must be active scenario 2 ', () => {
  //   component.isSubscribed =false
  //   component.name="subscribe"
  //   fixtures.detectChanges();
  //   let elem = el.queryAll(By.css('.btn'))
  //   elem[0].nativeElement.click()
  //   fixtures.detectChanges();
  //   elem = el.queryAll(By.css('.btn'))
  //   expect(elem[0].nativeElement.disabled).toBeTrue()
  //   expect(component.name).toBe('subscribed')
  // });
  //SCenario 3 button click and data change depends on api call
  // it('should have a button with button click disable must be active scenario 3 ', (done:DoneFn) => {
  //   component.isSubscribed =false
  //   component.name="subscribe"
  //   fixtures.detectChanges();
  //   let elem = el.queryAll(By.css('.btn'))
  //   elem[0].nativeElement.click()
  //   setTimeout(()=>{
  //     fixtures.detectChanges();
  //     elem = el.queryAll(By.css('.btn'))
  //     expect(elem[0].nativeElement.disabled).toBeTrue()
  //     expect(component.name).toBe('subscribed')
  //     done() // this is an async function used to signify a async call has been done
  //     // /done:DoneFn is basically a call back function
  //   },3000)
  //   //Now if we have another async operation of say 8sec then 
  //   //but before 8 sec we are setting as done
  //   //hence use fakeAsync to replicate api calls
  //   setTimeout(()=>{
  //     console.log("Other TS case")
  //   },8000)
  // });
  // it('should have a button with button click disable must be active scenario 3 ', (done:DoneFn) => {
  //   component.isSubscribed =false
  //   component.name="subscribe"
  //   fixtures.detectChanges();
  //   let elem = el.queryAll(By.css('.btn'))
  //   elem[0].nativeElement.click()
  //   setTimeout(()=>{
  //     fixtures.detectChanges();
  //     elem = el.queryAll(By.css('.btn'))
  //     expect(elem[0].nativeElement.disabled).toBeTrue()
  //     expect(component.name).toBe('subscribed')
  //     done() // this is an async function used to signify a async call has been done
  //     // /done:DoneFn is basically a call back function
  //   },3000)
  //   //Now if we have another async operation of say 8sec then 
  //   //but before 8 sec we are setting as done
  //   //hence use fakeAsync to replicate api calls
  //   setTimeout(()=>{
  //     console.log("Other TS case")
  //   },8000)
  // });
  //SCENARIO 4 using fake async 
  it('should have a button with button click disable must be active scenario 4 ',fakeAsync(() => {
    component.isSubscribed =false
    component.name="subscribe"
    fixtures.detectChanges();
    let elem = el.queryAll(By.css('.btn'))
    elem[0].nativeElement.click()
    setTimeout(()=>{
      fixtures.detectChanges();
      elem = el.queryAll(By.css('.btn'))
      // expect(elem[0].nativeElement.disabled).toBeTrue()
      // expect(component.name).toBe('subscribed')
    },3000)
    setTimeout(()=>{
      console.log("Other TS case")
    },8000)
    // tick(8000) // to replicate timer call after max time 
    // expect(elem[0].nativeElement.disabled).toBeTrue()
    // expect(component.name).toBe('subscribed')
    //but using tick and hardcoding value is not good so 
    //use flush () to make sure all async calls are complete
    flush()
    expect(elem[0].nativeElement.disabled).toBeTrue()
    expect(component.name).toBe('subscribed')
  }) );
});
