import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ClockComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ClockComponent,
  ],
})
export class LayoutModule {}
