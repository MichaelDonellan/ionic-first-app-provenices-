import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesinsterPageRoutingModule } from './lesinster-routing.module';

import { LesinsterPage } from './lesinster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesinsterPageRoutingModule
  ],
  declarations: [LesinsterPage]
})
export class LesinsterPageModule {}
