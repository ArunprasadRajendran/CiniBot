import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovietimeslotPageRoutingModule } from './movietimeslot-routing.module';

import { MovietimeslotPage } from './movietimeslot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovietimeslotPageRoutingModule
  ],
  declarations: [MovietimeslotPage]
})
export class MovietimeslotPageModule {}
