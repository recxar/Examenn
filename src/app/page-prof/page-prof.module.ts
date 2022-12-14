import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageProfPageRoutingModule } from './page-prof-routing.module';

import { PageProfPage } from './page-prof.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PageProfPageRoutingModule,
    QRCodeModule
  ],
  declarations: [PageProfPage]
})
export class PageProfPageModule {}
