import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovietimeslotPage } from './movietimeslot.page';

const routes: Routes = [
  {
    path: '',
    component: MovietimeslotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovietimeslotPageRoutingModule {}
