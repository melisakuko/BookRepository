import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    HomeComponentComponent,
    NotFoundComponent,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
