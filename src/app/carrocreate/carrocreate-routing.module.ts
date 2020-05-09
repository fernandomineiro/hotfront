import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrocreatePage } from './carrocreate.page';

const routes: Routes = [
  {
    path: '',
    component: CarrocreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrocreatePageRoutingModule {}
