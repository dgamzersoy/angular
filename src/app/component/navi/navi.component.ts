import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor( private toastrService:ToastrService) { }
  loginUser:any={}
 

  ngOnInit(): void {
  }
  addToCart(product:Product)
 {
   
   this.toastrService.success("Sepete eklendi",product.name);
 }
  
}
