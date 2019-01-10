import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './content/content.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BodyComponent,
      ContentComponent,
      DetailProductComponent,
      ModalComponent
   ],
   imports: [
      BrowserModule,
      MaterializeModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
