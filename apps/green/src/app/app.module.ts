import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { CoreModule } from '@nx-cli/core';

import { AppRoutingModule } from './app-routing.module';
import { ClockComponent } from './clock/clock.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NxModule.forRoot(), CoreModule.forRoot()],
  declarations: [AppComponent, ClockComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
