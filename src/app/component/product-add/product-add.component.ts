import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService,private productService:ProductService) { }

  ngOnInit(): void {
  }

  createProductAddForm(){
this.productAddForm=this.formBuilder.group({
  name:["",Validators.required],
  price:["",Validators.required],
  categoryId:["",Validators.required],
  description: ["",Validators.required],
  imageUrl: ["",Validators.required]
})
  }

  add(){
    if(this.productAddForm.valid){
    let productModel = Object.assign({}, this.productAddForm.value)

     this.toastrService.success("ürün eklendi","başaralı")

  }else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
  }
}
