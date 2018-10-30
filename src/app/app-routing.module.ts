import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContaTemplateComponent } from './create-conta-template/create-conta-template.component';
import { LoginTemplateComponent } from './login-template/login-template.component';

const routes : Routes = [
  { path: 'loginTemplate', component:LoginTemplateComponent },
  { path: 'createconta', component:CreateContaTemplateComponent }
]
@NgModule({

  exports:[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
