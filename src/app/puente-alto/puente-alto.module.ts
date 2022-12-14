import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PuenteAltoPageRoutingModule } from './puente-alto-routing.module';

import { PuenteAltoPage } from './puente-alto.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuenteAltoPageRoutingModule
  ],
  declarations: [PuenteAltoPage]
})
export class PuenteAltoPageModule {}
