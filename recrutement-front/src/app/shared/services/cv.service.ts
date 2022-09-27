import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cv} from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {


  private url = environment.apiUrl + '/cv';

  constructor(private httpClient: HttpClient) {
  }

  public getByCandidat(id: number): Observable<Cv> {
    return this.httpClient.get<Cv>(this.url + '/candidat/' + id);
  }

  public save(cv: Cv): Observable<any> {
    return this.httpClient.post(this.url, cv);
  }

  getById(cvId: any): Observable<Cv> {
    return this.httpClient.get<Cv>(this.url + '/' + cvId);
  }
}
