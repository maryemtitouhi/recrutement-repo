import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Candidat} from '../model/candidat';
import {Observable} from 'rxjs';
import {Societe} from '../model/societe';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = environment.apiUrl + '/register';

  constructor(private httpClient: HttpClient) {
  }

  public registerCandidat(candidat: Candidat): Observable<any> {
    return this.httpClient.post(this.url + '/candidat', candidat);
  }

  public registerSociete(societe: Societe): Observable<any> {
    return this.httpClient.post(this.url + '/societe', societe);
  }
}
