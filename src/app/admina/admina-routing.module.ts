import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminaPage } from './admina.page';

const routes: Routes = [
  {
    path: '',
    component: AdminaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminaPageRoutingModule {}
