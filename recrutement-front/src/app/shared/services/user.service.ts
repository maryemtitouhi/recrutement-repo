import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + '/user';

  constructor(private httpClient: HttpClient) {
  }
  public changePassword(passwordRequest: any): Observable<any> {
    return  this.httpClient.put(this.url + '/change-password', passwordRequest);
  }
}
