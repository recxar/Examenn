import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanJoaquinPageRoutingModule } from './san-joaquin-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SanJoaquinPage } from './san-joaquin.page';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanJoaquinPageRoutingModule
  ],
  declarations: [SanJoaquinPage]
})
export class SanJoaquinPageModule {}
