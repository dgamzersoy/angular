import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/service/alertify.service';
import { CartService } from 'src/app/service/cart.service';
declare let alertify:any;


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService :AlertifyService, private toastrService:ToastrService,
    private cartService:CartService) { }
  filterText=" ";
  products:Product[]=[
    {id:1,
    name:"lenova",
    price:25000,
    categoryId:1,
    description:"Reeder M15 Blue Max 64GB 4G LTE",
    imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"},
    {id:2,
      name:"asus",
      price:35000,
      categoryId:1,
      description:"Reeder M10 Blue Max 64GB 4G LTE",
      imageUrl:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {id:3,
        name:"asus",
        price:35000,
        categoryId:1,
        description:"Logitech iPad Pro 11 Slim Folio Pro Klavyeli Kılıf",
        imageUrl:"https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {id:4,
          name:"casper",
          price:45000,
          categoryId:1,
          description:"Logitech Apple iPad 5. - 6. Nesil Için Slim Folio Tablet Kılıfı 920-009060",
          imageUrl:"https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=819&q=80"
          }
          

  ]

  ngOnInit(): void {
  }

 addToCart(product:Product)
 {
   
   this.toastrService.success("Sepete eklendi",product.name);
   this.cartService.addToCart(product);
 }

}
