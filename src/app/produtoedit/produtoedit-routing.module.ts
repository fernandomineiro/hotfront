import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoeditPage } from './produtoedit.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoeditPageRoutingModule {}
