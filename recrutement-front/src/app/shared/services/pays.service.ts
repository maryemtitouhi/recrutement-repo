import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Pays} from '../model/pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private url = environment.apiUrl + '/pays';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Pays[]> {
    return this.httpClient.get<Pays[]>(this.url);
  }

  public save(pays: Pays): Observable<any> {
    return this.httpClient.post(this.url, pays);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(pays: Pays): Observable<any> {
    return this.httpClient.put(this.url, pays);
  }
}
