import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;
  // Creates a new instance of the voterService before each test
  beforeEach(() => {
    // Creates a fake instance of the Http and we specifiy we only need it for a delete and post method
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove a voter from a list of voters', () => {
      // Arrange
      var session = {id: 6, voters: ["joe", "smith"]};
      mockHttp.delete.and.returnValue(of(false));

      // Act
      voterService.deleteVoter(3, <ISession>session, "joe");

      // Assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("smith")
    })
  })
});
