import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderfailedPageRoutingModule } from './orderfailed-routing.module';

import { OrderfailedPage } from './orderfailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderfailedPageRoutingModule
  ],
  declarations: [OrderfailedPage]
})
export class OrderfailedPageModule {}
