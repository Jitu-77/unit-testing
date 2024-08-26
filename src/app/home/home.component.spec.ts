import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  //used to test the components 
  //used to create component instance
  let fixture: ComponentFixture<HomeComponent>; 

  //to test any element  in the dom 
  //we will take the help of Component Fixture
  let el :DebugElement

  //beforeEach here is an async block as due to the 
  //compileComponents is a promise function
  //if we don't provide async 'should create' will fail 
  //'should create' will execute before compileComponents returns
  //either we use async or waitForAsync
  //#######################async##############################
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [HomeComponent]
  //   })
  //   .compileComponents();
    
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //#####################################################
  //######################## waitForAsync #############################
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HomeComponent]
      })
      .compileComponents().then(()=>{
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance; // we can instantiate any component property
        //to trigger change detection
        fixture.detectChanges(); // this is used to detect changes when data get live populated
        el = fixture.debugElement
      })
    }));
  //#####################################################
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //test spec to check p element by css selectors
  it('should test p element',()=>{
    const elem = el.queryAll(By.css('p')) // returns a array
    console.log(elem)
    expect(elem[0].nativeElement.textContent).toBe('home works!')
  });
  //test spec for button
  it('should have a button disabled',()=>{
    const elem = el.queryAll(By.css('.btn'))
    expect(elem[0].nativeElement.disabled).toBeTruthy()
    const img = el.queryAll(By.css('img'))
    expect(img[0].nativeElement.src).toBe('https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png')
    component.title = "asd ad s"
    fixture.detectChanges();
    const text = el.queryAll(By.css('.title'))
    // expect(text[0].nativeElement.textContent).toBe('HI')
    // expect(text[0].nativeElement.textContent).toBe('')
    expect(text[0].nativeElement.textContent).toBe('asd ad s')

  })
});
