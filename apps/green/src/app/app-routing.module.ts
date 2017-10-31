import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: '@nx-cli/lazy#LazyModule'
  },
  {
    path: 'lazier',
    loadChildren: '@nx-cli/lazier#LazierModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
