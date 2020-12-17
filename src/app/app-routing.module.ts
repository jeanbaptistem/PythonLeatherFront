import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileUploaderComponent } from './file-uploader/file-uploader.component'
import { StatisticsComponent } from './statistics/statistics.component'

const appRoutes: Routes = [
  { path: 'home', component: FileUploaderComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', component : FileUploaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
