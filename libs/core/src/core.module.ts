import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreService } from './core.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent, RouterModule],
  declarations: [HeaderComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [CoreService]
    };
  }
}
