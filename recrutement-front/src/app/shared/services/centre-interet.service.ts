import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CentreInteret} from '../model/centre-interet';

@Injectable({
  providedIn: 'root'
})
export class CentreInteretService {

  private url = environment.apiUrl + '/centreInteret';

  constructor(private httpClient: HttpClient) {
  }

  public getByCv(id): Observable<CentreInteret[]> {
    return this.httpClient.get<CentreInteret[]>(this.url + '/' + id);
  }

  public save(centreInteret: CentreInteret): Observable<any> {
    return this.httpClient.post(this.url, centreInteret);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(centreInteret: CentreInteret): Observable<any> {
    return this.httpClient.put(this.url, centreInteret);
  }
}
