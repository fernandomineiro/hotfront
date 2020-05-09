import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraaPage } from './compraa.page';

const routes: Routes = [
  {
    path: '',
    component: CompraaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraaPageRoutingModule {}
