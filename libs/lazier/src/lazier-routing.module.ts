import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazierComponent } from './lazier.component';

const routes: Routes = [
  {
    path: '',
    component: LazierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazierRoutingModule {}
