import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderdetailsuccessPage } from './orderdetailsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: OrderdetailsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderdetailsuccessPageRoutingModule {}
