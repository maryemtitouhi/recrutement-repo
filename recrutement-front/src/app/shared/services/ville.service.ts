import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Ville} from '../model/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private url = environment.apiUrl + '/ville';

  constructor(private httpClient: HttpClient) {
  }
  public getByPays(id: number): Observable<Ville[]> {
    return this.httpClient.get<Ville[]>(this.url + '/pays/' + id);
  }
  public getAll(): Observable<Ville[]> {
    return this.httpClient.get<Ville[]>(this.url);
  }

  public save(ville: Ville): Observable<any> {
    return this.httpClient.post(this.url, ville);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(ville: Ville): Observable<any> {
    return this.httpClient.put(this.url, ville);
  }
}
