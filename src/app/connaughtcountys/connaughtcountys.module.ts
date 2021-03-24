import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtcountysPageRoutingModule } from './connaughtcountys-routing.module';

import { ConnaughtcountysPage } from './connaughtcountys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtcountysPageRoutingModule
  ],
  exports:[ConnaughtcountysPage],
  declarations: [ConnaughtcountysPage]
})
export class ConnaughtcountysPageModule {}
