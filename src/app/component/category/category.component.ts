import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Kategori Listesi"
  categories : Category[]=[
    {id:1, categoryName:"Elektronik"},
    {id:2, categoryName:"Moda"},
    {id:3, categoryName:"Ev, Yaşam,Kırtasiye,Ofis"},
    {id:4, categoryName:"Oto,Bahçe,Yapı Market"},
    {id:5, categoryName:"Anne,Bebek,Oyuncak"},
    {id:6, categoryName:"Spor"},
  ]

  

  ngOnInit(): void {
  }

}
