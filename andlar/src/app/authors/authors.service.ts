import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthor} from '@app/interfaces';
import { environment } from '@environment/environment';

@Injectable()
export class AuthorsService {
  constructor(public http: HttpClient) { }

  getAuthors(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/author`);
  }

  getAuthorById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/author/${id}`);
  }

  addAuthor(author: IAuthor) {
    return this.http.post<any>(`${environment.apiUrl}/author`, author);
  }

  updateAuthor(author: IAuthor) {
    return this.http.put<any>(`${environment.apiUrl}/author`, author);
  }

  deleteAuthor(id: string) {
    return this.http.delete<any>(`${environment.apiUrl}/author/${id}`);
  }
}
