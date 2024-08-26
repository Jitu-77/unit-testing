import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { routes } from "./app.routes"
import { HomeComponent } from "./home/home.component"
import { OthersComponent } from "./others/others.component"
import { MarksPipe } from "./marks.pipe"
import { AppComponent } from "./app.component"
import { Router } from "@angular/router"
import {Location} from "@angular/common";
import { DebugElement } from "@angular/core"
import { By } from "@angular/platform-browser"

describe('App Routing',()=>{
    let router :Router
    let location:Location
    //to detect change detection we need to have fixture 
    let fixture :ComponentFixture<AppComponent>
    let homeFixture : ComponentFixture<HomeComponent>
    let homeEl:DebugElement
    let otherFixture : ComponentFixture<OthersComponent>
    let otherEl:DebugElement
    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
         imports :[RouterTestingModule.withRoutes(routes),AppComponent,MarksPipe,HomeComponent,OthersComponent]   
        }).compileComponents()
    }))
    beforeEach(()=>{
        //to initialize router test beds
        router = TestBed.inject(Router)
        // inject location to the test beds
        location = TestBed.inject(Location)
        router.initialNavigation() // to initiate router instance
        //create fixture from the TEST BED and assign it to fixture components
        fixture = TestBed.createComponent(AppComponent)
        homeFixture = TestBed.createComponent(HomeComponent)
        homeEl = homeFixture.debugElement
        otherFixture = TestBed.createComponent(OthersComponent)
        otherEl = otherFixture.debugElement
    })
    //Navigation routes are always async
    //so need to use waitForAsync in each test beds

    //test case for home path
    it('Should have default home component loaded',waitForAsync(()=>{
        fixture.detectChanges()
        //when stable helps to resume testing for async change detection or activity
        //returns a promise
        fixture.whenStable().then(()=>{
            expect(location.path()).toBe('/')
        })
    }))
    //test case for route to others 
    it('Should have route from home to other component',waitForAsync(()=>{

        homeFixture.detectChanges()
        let button = homeEl.queryAll(By.css('.btn-p'))
        button[0].nativeElement.click()
        //when stable helps to resume testing for async change detection or activity
        //returns a promise
        homeFixture.whenStable().then(()=>{
            expect(location.path()).toBe('/others')
        })
    }))
    //test case for route to home 
    it('Should have route from other to home component',waitForAsync(()=>{

        otherFixture.detectChanges()
        let button = otherEl.queryAll(By.css('.btn-p'))
        button[0].nativeElement.click()
        //when stable helps to resume testing for async change detection or activity
        //returns a promise
        otherFixture.whenStable().then(()=>{
            expect(location.path()).toBe('/home')
        })
    }))
})