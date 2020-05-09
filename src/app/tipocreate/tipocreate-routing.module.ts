import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipocreatePage } from './tipocreate.page';

const routes: Routes = [
  {
    path: '',
    component: TipocreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipocreatePageRoutingModule {}
