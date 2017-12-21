import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { CoreModule } from '@nx-cli/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLayoutModule } from './layout/layout.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NxModule.forRoot(), CoreModule.forRoot(), MyLayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
