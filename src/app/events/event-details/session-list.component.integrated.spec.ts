import { CollapsibleWellComponent } from './../../common/collapsible-well.component';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from './../shared/duration.pipe';
import { VoterService } from './voter.service';
import { AuthService } from './../../user/auth.service';
import { Component, DebugElement, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionsListComponent } from '.';
import { By } from '@angular/platform-browser';


describe('SessionListComponent', () => {
  let mockAuthService;
  let mockVoterService;
  // A ComponentFixture is the wrapper around a component instance
  let fixture: ComponentFixture<SessionsListComponent>;
  let component: SessionsListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;
  beforeEach(() => {
    // Onlyt set the value of the mockServices in the beforeEach to make sure we get fresh values with each test
    mockAuthService = {isAuthenticated: () => true, currentUser: {userName: 'Joe'}};
    mockVoterService = {userHasVoted: () => true};
    // The TestBed makes angular create the component for us
    // We create this component and give it everything it needs like services and the component itself
    TestBed.configureTestingModule({
      declarations: [SessionsListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    // Creates the SessionListComponent
    fixture = TestBed.createComponent(SessionsListComponent);
    // fixture.componentInstance is the component itself
    component = fixture.componentInstance;
    // fixture.debugElement gives us a way to work with the template
    debugEl = fixture.debugElement;
    // Gives us handles to all the different pieces that we need in order to write a test around a component.
    element = fixture.nativeElement;
  });
  describe('initial display', () => {
    it('should have the correct name', () => {
      // Arrange
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob'],
        },
      ];

      // Act
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      // detects changes and updates the bindings in the template
      fixture.detectChanges();

      // Assert
      // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1')
    });
  });
});
