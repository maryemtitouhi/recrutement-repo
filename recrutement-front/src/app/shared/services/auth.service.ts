import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

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
}
