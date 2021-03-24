import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtcountysPage } from './connaughtcountys.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtcountysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtcountysPageRoutingModule {}
