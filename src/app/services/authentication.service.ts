import { Injectable } from '@angular/core';
import { User } from '../models/user';

let users = [
  new User('admin@admin.com', 'p@ssw0rd'),
];

@Injectable()
export class AuthenticationService {

  public logout() {
    sessionStorage.removeItem('user');
  }

  public login(user: User) {
    let authenticatedUser = users.find((u) => u.email === user.email);

    if (authenticatedUser && (authenticatedUser.password === user.password)) {
      sessionStorage.setItem('user', authenticatedUser.email);
      return true;
    }
    return false;
  }

  public checkCredentials() {
    if (sessionStorage.getItem('user') === null) {
      return false;
    }

    return true;
  }
}
