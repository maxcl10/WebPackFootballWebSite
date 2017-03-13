import {Injectable} from '@angular/core';


import  {User} from '../models/user';


var users = [
  new User('admin@admin.com', 'p@ssw0rd'),
];

@Injectable()
export class AuthenticationService {

  constructor(  ) { }

  logout() {
    sessionStorage.removeItem("user");  
  }

  login(user: User) {
    var authenticatedUser = users.find(u => u.email === user.email);

    if (authenticatedUser && (authenticatedUser.password == user.password)) {
      sessionStorage.setItem("user", authenticatedUser.email);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (sessionStorage.getItem("user") === null) {
  return false;
    }

    return true;
  }
}