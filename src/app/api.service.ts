import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from './statisticsInterface';
import { Image } from './imageInterface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  API_URL = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  public getStatistics(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(`${this.API_URL}/statistics/`);
  }



  //public postImage():

  postImage(body: any): Observable<Image[]> {
     return this.http.post<Image[]>(`${this.API_URL}/rcnn_results/`, body);
}

}
