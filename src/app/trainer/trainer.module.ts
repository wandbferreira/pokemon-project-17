import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TrainerDetailComponent,
  }
]

@NgModule({
  declarations: [
    TrainerDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TrainerModule { }
