import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutocreatePageRoutingModule } from './produtocreate-routing.module';

import { ProdutocreatePage } from './produtocreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutocreatePageRoutingModule
  ],
  declarations: [ProdutocreatePage]
})
export class ProdutocreatePageModule {}
