import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AddCategoryComponent } from './modals/add-category/add-category.component';
import { SplitTransactionComponent } from './modals/split-transaction/split-transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    AddCategoryComponent,
    SplitTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
