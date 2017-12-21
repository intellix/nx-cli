import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreService } from './core.service';

@NgModule({
  imports: [CommonModule],
  exports: [RouterModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [CoreService]
    };
  }
}
