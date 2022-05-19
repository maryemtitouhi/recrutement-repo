import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Diplome} from '../model/diplome';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  private url = environment.apiUrl + '/diplome';

  constructor(private httpClient: HttpClient) {
  }

  public getByCv(id): Observable<Diplome[]> {
    return this.httpClient.get<Diplome[]>(this.url + '/' + id);
  }

  public save(diplome: Diplome): Observable<any> {
    return this.httpClient.post(this.url, diplome);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(diplome: Diplome): Observable<any> {
    return this.httpClient.put(this.url, diplome);
  }
}
