import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from './statisticsInterface';
import { Image } from './imageInterface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getStatistics(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(`${this.API_URL}/statistics/`);
  }

  public postImage(body: Image): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/images`, body);
  }

}
