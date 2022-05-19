import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Experience} from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private url = environment.apiUrl + '/experience';

  constructor(private httpClient: HttpClient) {
  }

  public getByCv(id): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.url + '/' + id);
  }

  public save(experience: Experience): Observable<any> {
    return this.httpClient.post(this.url, experience);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(experience: Experience): Observable<any> {
    return this.httpClient.put(this.url, experience);
  }
}
