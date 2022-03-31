import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TypePoste} from '../model/type-poste';

@Injectable({
  providedIn: 'root'
})
export class TypePosteService {

  private url = environment.apiUrl + '/typePoste';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<TypePoste[]> {
    return this.httpClient.get<TypePoste[]>(this.url);
  }

  public save(typePoste: TypePoste): Observable<any> {
    return this.httpClient.post(this.url, typePoste);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  update(typePoste: TypePoste): Observable<any> {
    return this.httpClient.put(this.url, typePoste);
  }
}
