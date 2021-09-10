import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  public getcomnent(): Observable<any> {
    const url = `${this.BASE_URL}/comments`;
    // console.log(url);

    return this.httpClient.get(url, this.httpOptions);
  }

  public getUser(number): Observable<any> {
    const url = `${this.BASE_URL2}${number}`;
    return this.httpClient.get(url, this.httpOptions);
  }
}
