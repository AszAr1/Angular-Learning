import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WishModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }