import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private url = environment.apiUrl + '/stat';

  constructor(private httpClient: HttpClient) {
  }
  public count(): Observable<any> {
    return  this.httpClient.get(this.url + '/home');
  }

  public topCompany(): Observable<any> {
    return  this.httpClient.get(this.url + '/topCompany');
  }

  public topCandidature(): Observable<any> {
    return  this.httpClient.get(this.url + '/topCandidature');
  }

  public offreCandidatureByMonth(): Observable<any> {
    return  this.httpClient.get(this.url + '/offreCandidatureByMonth');
  }
}
