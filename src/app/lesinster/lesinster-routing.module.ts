import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesinsterPage } from './lesinster.page';

const routes: Routes = [
  {
    path: '',
    component: LesinsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesinsterPageRoutingModule {}
