import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + '/login';

  constructor(private httpClient: HttpClient) {
  }
  public authenticate(user: User): Observable<any> {
    return  this.httpClient.post(this.url, user);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (token || !jwtHeper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  getRole(): any {
    const token = localStorage.getItem('token');
    const jwtHeper = new JwtHelperService();
    if (token || !jwtHeper.isTokenExpired(token)) {
      const decodedToken = jwtHeper.decodeToken(token);
      const roles = decodedToken.roles;
      return roles[0];
    }
  }
}
