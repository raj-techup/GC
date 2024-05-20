import { BrowserModule } from '@angular/platform-browser';
// import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule  }   from '@angular/forms';

import { HeaderModule } from '../app/_view/base/header/header.module';
import { FooterModule } from '../app/_view/base/footer/footer.module';
import { BaseComponent } from './_view/base/base.component';
import { CommonModule } from '@angular/common'
import { HomeModule } from './_view/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,

    // DetailconferenceComponent,

    // ChatbotComponent
    // VisionCoreValueComponent, 
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,

    HeaderModule,
    FooterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule ,
    CommonModule,
    HomeModule
   
  ],

  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
