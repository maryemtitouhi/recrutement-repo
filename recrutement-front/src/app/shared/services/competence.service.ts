import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Competence} from '../model/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private url = environment.apiUrl + '/competence';

  constructor(private httpClient: HttpClient) {
  }

  public getByCv(id): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>(this.url + '/' + id);
  }

  public save(competence: Competence): Observable<any> {
    return this.httpClient.post(this.url, competence);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(competence: Competence): Observable<any> {
    return this.httpClient.put(this.url, competence);
  }
}
