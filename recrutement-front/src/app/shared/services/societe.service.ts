import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Societe} from '../model/societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private url = environment.apiUrl + '/societe';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Societe[]> {
    return this.httpClient.get<Societe[]>(this.url);
  }


  update(societe: Societe): Observable<any> {
    return this.httpClient.put(this.url, societe);
  }
}
