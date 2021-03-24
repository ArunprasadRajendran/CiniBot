import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderdetailfailedPage } from './orderdetailfailed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderdetailfailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderdetailfailedPageRoutingModule {}
