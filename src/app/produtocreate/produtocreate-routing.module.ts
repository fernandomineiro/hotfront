import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutocreatePage } from './produtocreate.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutocreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutocreatePageRoutingModule {}
