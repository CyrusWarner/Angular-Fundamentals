import { SessionsListComponent } from './sessions-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionsListComponent;
  let mockAuthService;
  let mockVoterService;

  beforeEach(() => {
    component = new SessionsListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      // Arrange
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
      ];
      component.filterBy='intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      //Act
      component.ngOnChanges();

      // Assert
      expect(component.visibleSessions.length).toBe(2);
      expect(component.visibleSessions).not.toContain(<ISession>{ name: 'session 3', level: 'beginner' })
    });
    it('should sort the sessions correctly', () => {
      // Arrange
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' },
      ];
      component.filterBy='all';
      component.sortBy = 'name';
      component.eventId = 3;

      //Act
      component.ngOnChanges();

      // Assert
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
