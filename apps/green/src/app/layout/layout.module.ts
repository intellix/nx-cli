import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, SidebarComponent } from '@nx-cli/layout';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class MyLayoutModule {}
