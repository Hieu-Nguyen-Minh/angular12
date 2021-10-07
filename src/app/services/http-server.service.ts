import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IStudent } from '../models/Strudent';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private BASE_URL = 'http://localhost:3000';
  private BASE_URL2 = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      // 'Authorization': 'key'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getStudents() {
    const url = `${this.BASE_URL}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getStudent(id) {
    const url = `${this.BASE_URL}/students/${id}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addStudents(data: IStudent) {
    const url = `${this.BASE_URL}/students`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteStudent(id: number) {
    const url = `${this.BASE_URL}/students/${id}`;
    return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
  }

  public updateStudent(id, data: IStudent) {
    const url = `${this.BASE_URL}/students/${id}`;
    return this.httpClient
      .put<any>(url, data)
      .pipe(catchError(this.handleError));
  }

  public getcomnent(): Observable<any> {
    const url = `${this.BASE_URL}/comments`;
    // console.log(url);

    return this.httpClient.get(url, this.httpOptions);
  }

  public getRandomStudent() {
    const url = `${this.BASE_URL2}1`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public postComnent(param): Observable<any> {
    const url = `${this.BASE_URL}/comments`;
    return this.httpClient.post(url, param, this.httpOptions);
  }

  public getUser(number): Observable<any> {
    const url = `${this.BASE_URL2}${number}`;
    return this.httpClient.get(url, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
