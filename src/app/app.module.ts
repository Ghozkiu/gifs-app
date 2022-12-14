import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
