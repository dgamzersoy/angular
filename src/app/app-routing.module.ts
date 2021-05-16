import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
 
  {path:"products", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
