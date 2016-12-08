import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {User} from './user';
import {UserService} from './user.service';

describe('User Service', () => {

  beforeEachProviders(() => [UserService]);

  describe('#getAllUsers()', () => {

    it('should return an empty array by default', inject([UserService], (service: UserService) => {
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should return all users', inject([UserService], (service: UserService) => {
      let user1 = new User({title: 'Hello 1', complete: false});
      let user2 = new User({title: 'Hello 2', complete: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#save(user)', () => {

    it('should automatically assign an incrementing id', inject([UserService], (service: UserService) => {
      let user1 = new User({title: 'Hello 1', complete: false});
      let user2 = new User({title: 'Hello 2', complete: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getUserById(1)).toEqual(user1);
      expect(service.getUserById(2)).toEqual(user2);
    }));

  });

  describe('#deleteUserById(id)', () => {

    it('should remove user with the corresponding id', inject([UserService], (service: UserService) => {
      let user1 = new User({title: 'Hello 1', complete: false});
      let user2 = new User({title: 'Hello 2', complete: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(1);
      expect(service.getAllUsers()).toEqual([user2]);
      service.deleteUserById(2);
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should not removing anything if user with corresponding id is not found', inject([UserService], (service: UserService) => {
      let user1 = new User({title: 'Hello 1', complete: false});
      let user2 = new User({title: 'Hello 2', complete: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(3);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#updateUserById(id, values)', () => {

    it('should return user with the corresponding id and updated data', inject([UserService], (service: UserService) => {
      let user = new User({title: 'Hello 1', complete: false});
      service.addUser(user);
      let updatedUser = service.updateUserById(1, {
        title: 'new title'
      });
      expect(updatedUser.title).toEqual('new title');
    }));

    it('should return null if user is not found', inject([UserService], (service: UserService) => {
      let user = new User({title: 'Hello 1', complete: false});
      service.addUser(user);
      let updatedUser = service.updateUserById(2, {
        title: 'new title'
      });
      expect(updatedUser).toEqual(null);
    }));

  });

  describe('#toggleUserComplete(user)', () => {

    it('should return the updated user with inverse complete status', inject([UserService], (service: UserService) => {
      let user = new User({title: 'Hello 1', complete: false});
      service.addUser(user);
      let updatedUser = service.toggleUserComplete(user);
      expect(updatedUser.complete).toEqual(true);
      service.toggleUserComplete(user);
      expect(updatedUser.complete).toEqual(false);
    }));

  });

});