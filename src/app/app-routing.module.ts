import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlAddComponent } from './pl/pl-add/pl-add.component';
import { PlListComponent } from './pl/pl-list/pl-list.component';
import { PlUpdateComponent } from './pl/pl-update/pl-update.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'pl', component: PlListComponent},
  {path:'add', component: PlAddComponent},
  {path:'update', component: PlUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
