import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { CoreModule } from '@nx-cli/core';
import { LayoutModule } from '@nx-cli/layout';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NxModule.forRoot(), CoreModule.forRoot(), LayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
