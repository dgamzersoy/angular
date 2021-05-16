import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NaviComponent } from './component/navi/navi.component';

import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';
import { NavaltComponent } from './component/navalt/navalt.component';

import { ContactComponent } from './component/contact/contact.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import {ToastrModule} from "ngx-toastr"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductlistComponent } from './component/productlist/productlist.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    NaviComponent,
    
    CategoryComponent,
    ProductComponent,
    NavaltComponent,

    ContactComponent,
    VatAddedPipe,
    FilterpipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    ProductlistComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toastr-bottom-right"
    }),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
