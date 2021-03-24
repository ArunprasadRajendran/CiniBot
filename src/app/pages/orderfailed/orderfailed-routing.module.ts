import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderfailedPage } from './orderfailed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderfailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderfailedPageRoutingModule {}
