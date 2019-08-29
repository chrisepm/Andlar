import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPublication } from '@app/interfaces';
import { environment } from '@environment/environment';

@Injectable()
export class PublicationsService {
  constructor(public http: HttpClient) { }

  getPublications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/publication`);
  }

  getPublicationById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/publication/${id}`);
  }

  getPublicationByAuthorId(id: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/publication/filter`, {
      authorId: id
    });
  }

  getPublicationsByTitle(title: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/publication/filter`, {
      title: title
    });
  }

  addPublication(publication: IPublication) {
    return this.http.post<any>(`${environment.apiUrl}/publication`, publication);
  }

  updatePublication(publication: IPublication) {
    return this.http.put<any>(`${environment.apiUrl}/publication`, publication);
  }

  deletePublication(id: string) {
    return this.http.delete<any>(`${environment.apiUrl}/publication/${id}`);
  }
}
