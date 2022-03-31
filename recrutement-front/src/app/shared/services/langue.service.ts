import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Langue} from '../model/langue';

@Injectable({
  providedIn: 'root'
})
export class LangueService {

  private url = environment.apiUrl + '/langue';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Langue[]> {
    return this.httpClient.get<Langue[]>(this.url);
  }

  public save(langue: Langue): Observable<any> {
    return this.httpClient.post(this.url, langue);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(langue: Langue): Observable<any> {
    return this.httpClient.put(this.url, langue);
  }
}
