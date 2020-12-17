import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Observable } from 'rxjs';
import { Statistics } from '../statisticsInterface';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  //statistics$: Observable<Statistics[]>;

  statistics$ = [
    {
      total_number_of_images : "125",
      default_percentage : "50%",
      average_default_surface : "23mm²",
    }
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit()  {
    //this.getStatistics();
  }

  public getStatistics() {
    //this.statistics$ = this.apiService.getStatistics();
  }

}
