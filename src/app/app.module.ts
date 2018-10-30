import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { CreateContaTemplateComponent } from './create-conta-template/create-conta-template.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginTemplateComponent,
    CreateContaTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
