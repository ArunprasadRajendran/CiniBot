import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailsuccessPageRoutingModule } from './orderdetailsuccess-routing.module';

import { OrderdetailsuccessPage } from './orderdetailsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderdetailsuccessPageRoutingModule
  ],
  declarations: [OrderdetailsuccessPage]
})
export class OrderdetailsuccessPageModule {}
