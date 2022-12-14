import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanJoaquinPage } from './san-joaquin.page';

const routes: Routes = [
  {
    path: '',
    component: SanJoaquinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanJoaquinPageRoutingModule {}
