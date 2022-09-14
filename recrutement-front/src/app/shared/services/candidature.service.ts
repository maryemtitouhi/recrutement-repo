import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../model/candidat';
import {Candidature} from '../model/candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private url = environment.apiUrl + '/candidature';

  constructor(private httpClient: HttpClient) {
  }

  public getByCandidat(candidatId: any): Observable<Candidature[]> {
    return this.httpClient.get<Candidature[]>(this.url + '/candidat/' + candidatId);
  }
  public getByOffre(offreId: any): Observable<Candidature[]> {
    return this.httpClient.get<Candidature[]>(this.url + '/offre/' + offreId);
  }

  public postuler(candidatId: any, offreId: any): Observable<any> {
    return this.httpClient.get(this.url + '/postule/' + candidatId + '/' + offreId);
  }
}
