import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarroeditPage } from './carroedit.page';

const routes: Routes = [
  {
    path: '',
    component: CarroeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarroeditPageRoutingModule {}
