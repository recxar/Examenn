import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuenteAltoPage } from './puente-alto.page';

const routes: Routes = [
  {
    path: '',
    component: PuenteAltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuenteAltoPageRoutingModule {}
