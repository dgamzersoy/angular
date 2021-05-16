import { Component, OnInit } from '@angular/core';
import { NavAlt } from 'src/app/models/navalt';

@Component({
  selector: 'app-navalt',
  templateUrl: './navalt.component.html',
  styleUrls: ['./navalt.component.css']
})
export class NavaltComponent implements OnInit {

  constructor() { }

  navalts:NavAlt[]=[
    {imageUrl:"https://images.unsplash.com/photo-1562873658-15d15ab42c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"}

  ]

  ngOnInit(): void {
  }

}
