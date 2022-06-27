import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NiveauLangue} from '../model/niveau-langue';

@Injectable({
  providedIn: 'root'
})
export class NiveauLangueService {

  private url = environment.apiUrl + '/niveauLangue';

  constructor(private httpClient: HttpClient) {
  }

  public getByCv(id): Observable<NiveauLangue[]> {
    return this.httpClient.get<NiveauLangue[]>(this.url + '/' + id);
  }

  public save(niveauLangue: NiveauLangue): Observable<any> {
    return this.httpClient.post(this.url, niveauLangue);
  }

  public delete(langueId, cvId): Observable<any> {
    return this.httpClient.delete(this.url + '/' + langueId + '/' + cvId);
  }

  update(niveauLangue: NiveauLangue): Observable<any> {
    return this.httpClient.put(this.url, niveauLangue);
  }
}
