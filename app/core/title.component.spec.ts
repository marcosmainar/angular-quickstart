import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TitleComponent } from './title.component';
import { UserService } from './user.service'
import { UserServiceConfig } from './user.service'

let comp:    TitleComponent;
let fixture: ComponentFixture<TitleComponent>;
let de:      DebugElement;
let el:      HTMLElement;
let userService: UserService;
let userServiceStub: UserService;
let userServiceConfig: UserServiceConfig;

describe('TitleComponent', () => {
  // async beforeEach
  beforeEach( async (() => {
    // stub UserService for test purposes
    userServiceConfig = {
        userName : 'Philip Marlowe'
    }
    userServiceStub = new UserService(userServiceConfig);

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ], // declare the test component
      providers: [
           // { provide: ComponentFixtureAutoDetect, useValue: true }
           { provide: UserService, useValue: userServiceStub }
       ]
    }).compileComponents() // Compile template and css (is async) and returns a promise
        .then(() => { // synchronous beforeEach
        // create component and test fixture
        fixture = TestBed.createComponent(TitleComponent);

        // get test component from the fixture
        comp = fixture.componentInstance; // TitleComponent test instance

        // Pretend that is wired to something that provides a subtitle (@Input property)
        comp.subtitle = "Test subtitle";
        comp.showHeading = true;

        // trigger initial data binding, othwerise h1 element won't be present in the DOM
        fixture.detectChanges(); 
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;

        // UserService from the root injector
        userService = TestBed.get(UserService);
        // UserService actually injected into the component
        //userService = fixture.debugElement.injector.get(UserService);
    });
  }));

//   it('no title in the DOM until manually call `detectChanges`', () => {
//     expect(el.textContent).toEqual('');
//   });

  it('should display original title', () => {
    // trigger change detection to update the view
    fixture.detectChanges();

    // confirm the element's content
    expect(el.textContent).toContain(comp.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(el.textContent).toContain(oldTitle);
  });

 it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();  // detect changes explicitly
    expect(el.textContent).toContain('Test Title');
 });

});
