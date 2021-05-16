import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products:Product[]=[
    {id:1,
    name:"samsung",
    price:25000,
    categoryId:2,
    description:"32Gb Bellek",
    imageUrl:"https://images.unsplash.com/photo-1610672777373-c0f6229b950a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"},
    {id:2,
      name:"general mobile",
      price:35000,
      categoryId:2,
      description:"16gb Bellek",
      imageUrl:"https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      },
      {id:3,
        name:"Iphone",
        price:35000,
        categoryId:2,
        description:"32 gb",
        imageUrl:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {id:4,
          name:"casper",
          price:45000,
          categoryId:2,
          description:"128 gb",
          imageUrl:"https://images.unsplash.com/photo-1559526324-593bc073d938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
        ]
}
