import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailfailedPageRoutingModule } from './orderdetailfailed-routing.module';

import { OrderdetailfailedPage } from './orderdetailfailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderdetailfailedPageRoutingModule
  ],
  declarations: [OrderdetailfailedPage]
})
export class OrderdetailfailedPageModule {}
