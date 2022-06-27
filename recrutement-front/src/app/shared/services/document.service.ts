import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Document} from '../model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private url = environment.apiUrl + '/documents';

  constructor(private httpClient: HttpClient) {
  }

  public getByCv(id): Observable<Document[]> {
    return this.httpClient.get<Document[]>(this.url + '/' + id);
  }

  public uploadCv(cv: File, cvId): Observable<any> {
    const formData = new FormData();
    formData.append('cv', cv);
    return this.httpClient.post(this.url + '/upload/cv/' + cvId, formData);
  }
  public uploadLettre(lettre: File, cvId): Observable<any> {
    const formData = new FormData();
    formData.append('lettre', lettre);
    return this.httpClient.post(this.url + '/upload/lettre/' + cvId, formData);
  }

}
