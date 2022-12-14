import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VespucipPageRoutingModule } from './vespucip-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VespucipPage } from './vespucip.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VespucipPageRoutingModule
  ],
  declarations: [VespucipPage]
})
export class VespucipPageModule {}
