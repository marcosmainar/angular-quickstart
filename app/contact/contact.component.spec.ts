import { ComponentFixture, TestBed, ComponentFixtureAutoDetect, async,
    fakeAsync, tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule }     from '@angular/forms';

import { Contact, ContactService } from './contact.service';
import { UserService }    from '../core/user.service';
import { ContactComponent } from './contact.component';
import { UserServiceConfig } from '../core/user.service'
import { SharedModule }       from '../shared/shared.module';
import { AwesomePipe }         from '../shared/awesome.pipe';
import { HighlightDirective }  from '../shared/highlight.directive';

let comp:    ContactComponent;
let fixture: ComponentFixture<ContactComponent>;
let formDebugElement, messageDebugElement:      DebugElement;
let el:      HTMLElement;
let userService: UserService;
let contactService: ContactService;
let userServiceStub: UserService;
let userServiceConfig: UserServiceConfig;
let spy: jasmine.Spy;
let testContacts : Contact[];

describe('ContactComponent', () => {

  beforeEach( async (() => {
     // stub UserService for test purposes
    userServiceConfig = {
        userName : 'Philip Marlowe'
    }
    userServiceStub = new UserService(userServiceConfig);
    testContacts = [];
    testContacts.push(new Contact(1, "Test Contact"));

    TestBed.configureTestingModule({
       imports:      [ FormsModule ],
       declarations: [ ContactComponent ],
       providers:    [ 
           ContactService, // inject real ContactService
           { provide: UserService, useValue: userServiceStub }
      ],
    }).compileComponents() // Compile template and css (is async) and returns a promise
        .then(() => { // synchronous beforeEach

        fixture = TestBed.createComponent(ContactComponent);
        comp    = fixture.componentInstance;

        // ContactService actually injected into the component
        contactService = fixture.debugElement.injector.get(ContactService);

        // Setup spy on the `getContacts` method to replace real method call
        spy = spyOn(contactService, 'getContacts')
                .and.returnValue(Promise.resolve(testContacts));

        // Get the relevant elements by CSS selector (e.g., by class name)
        formDebugElement = fixture.debugElement.query(By.css('.form'));
    });
  }));

  it('should not show form with contacts before OnInit', () => {
    // form is hidden with ngIf since contacts will be empty
    expect(formDebugElement).toBeNull();
  });

  it('should not call getContacts before OnInit', () => {
    expect(spy.calls.any()).toBe(false, 'getContacts not yet called');
  });

  it('should call getContacts after first change detection cycle on OnInit', () => {
    fixture.detectChanges(); // First change detection cycle -> Angular calls ngOnInit
    expect(formDebugElement).toBeNull();
    expect(spy.calls.any()).toBe(true, 'getContacts called');
  });

  it('should still not show form with contacts after component initialized', () => {
    fixture.detectChanges(); // First change detection cycle -> Angular calls ngOnInit
    messageDebugElement = fixture.debugElement.query(By.css('.msg'));
    formDebugElement = fixture.debugElement.query(By.css('.form'));
    expect(messageDebugElement).toBeDefined();
    // getContacts service is async => still has not returned with contacts
    el = messageDebugElement.nativeElement;
    expect(el.textContent).toBe('Loading contacts ...', 'no getContacts yet');
    expect(spy.calls.any()).toBe(true, 'getContacts called');
  });
  
  // Async test
  it('should show form after getContacts promise (async)', async(() => {
    fixture.detectChanges();
    // the whenStable promise resolves when all pending asynchronous activities
    // within this test complete (i.e. when the getContacts promise completes)
    fixture.whenStable().then(() => { 
      // wait for async getContacts (the test must wait for the promise to resolve 
      // in the next turn of the JavaScript engine.
      fixture.detectChanges();        // update view with quote
      let contactNameDebugElement = fixture.debugElement.query(By.css('h3'));
      let el = contactNameDebugElement.nativeElement;
      expect(el.textContent).toBe(testContacts[0].name);
    });
  }));

  // Similar test with fakeAsync, test appears to be synchronous
  // (no then to disrupt the visible flow of control, then is replaced by tick())
  it('should show quote after getContacts promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick(); //  simulates the passage of time until all pending asynchronous activities complete
    fixture.detectChanges(); // update view with contact
    let contactNameDebugElement = fixture.debugElement.query(By.css('h3'));
    let el = contactNameDebugElement.nativeElement;
    expect(el.textContent).toBe(testContacts[0].name);
  }));

});
