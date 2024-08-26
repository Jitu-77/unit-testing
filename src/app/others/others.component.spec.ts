import { ComponentFixture, TestBed, fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';

import { OthersComponent } from './others.component';
import { DebugElement } from '@angular/core';
import { delay, of } from 'rxjs';

describe('OthersComponent', () => {
  let component: OthersComponent;
  let fixture: ComponentFixture<OthersComponent>;
  let el:DebugElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersComponent]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(OthersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  it('should test promises',fakeAsync(()=>{
    let counter = 0
    Promise.resolve().then(()=>{
      counter = counter + 1
    })
    // flush()
    flushMicrotasks()
    expect(counter).toBe(1)
  }));
  it('should test Observables',fakeAsync(()=>{
    //scenario 1 sync Observables
    // let isSubscribe = false;
    // let myObs = of(isSubscribe)
    // myObs.subscribe(()=>{
    //   isSubscribe = true
    // })
    // expect(isSubscribe).toBeTruthy()

    //scenario 2 will be async observables 
    //replicated by delay we need to use fake async 
    let isSubscribe = false;
    let myObs = of(isSubscribe).pipe(delay(1000))
    myObs.subscribe(()=>{
      isSubscribe = true
    })
    tick(1000) // to update the time by 1sec
    expect(isSubscribe).toBeTruthy()
  }))
});
