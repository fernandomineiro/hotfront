import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoeditPage } from './tipoedit.page';

const routes: Routes = [
  {
    path: '',
    component: TipoeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoeditPageRoutingModule {}
