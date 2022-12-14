import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VespucipPage } from './vespucip.page';

const routes: Routes = [
  {
    path: '',
    component: VespucipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VespucipPageRoutingModule {}
