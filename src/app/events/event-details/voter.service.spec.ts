import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;
  // Creates a new instance of the voterService before each test
  beforeEach(() => {
    // Creates a fake instance of the Http and we specifiy we only need it for a delete and post method
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove a voter from a list of voters', () => {
      // Arrange
      var session = { id: 6, voters: ['joe', 'smith'] };
      mockHttp.delete.and.returnValue(of(false));

      // Act
      voterService.deleteVoter(3, <ISession>session, 'joe');

      // Assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('smith');
    });
    it('should call http delete with the right url', () => {
      // Arrange
      var session = { id: 6, voters: ['joe', 'smith'] };
      mockHttp.delete.and.returnValue(of(false));

      // Act
      voterService.deleteVoter(3, <ISession>session, 'joe');

      // Assert
      expect(mockHttp.delete).toHaveBeenCalledWith(
        `/api/events/3/sessions/6/voters/joe`
      );
    });
  });
  describe('addVoter', () => {
    it('should add a voter to the list of voters', () => {
      // Arrange
      var session = { id: 6, voters: ['joe', 'smith'] };
      mockHttp.post.and.returnValue(of(false));
      // Act
      voterService.addVoter(3, <ISession>session, 'bob');
      // Assert
      expect(session.voters.length).toBe(3);
      expect(session.voters).toContain('bob');
    });
    it('should call http.post with the right URL', () => {
      // Arrange
      var session = { id: 6, voters: ['joe', 'smith'] };
      mockHttp.post.and.returnValue(of(false));

      // Act
      voterService.addVoter(3, <ISession>session, 'bob');

      // Assert
      // jasmine.any(object) checks to make sure if the third parameter is any object
      expect(mockHttp.post).toHaveBeenCalledWith(
        `/api/events/3/sessions/6/voters/bob`,
        {},
        jasmine.any(Object)
      );
    });
  });
});
