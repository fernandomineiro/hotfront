import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraaPageRoutingModule } from './compraa-routing.module';

import { CompraaPage } from './compraa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraaPageRoutingModule
  ],
  declarations: [CompraaPage]
})
export class CompraaPageModule {}
