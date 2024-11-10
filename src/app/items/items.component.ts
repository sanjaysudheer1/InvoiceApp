import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routesConstants } from '../routes_constants';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  constructor(private router: Router) {}
  products = [
    // {
    //   id: '1000',
    //   code: 'f230fh0g3',
    //   name: 'Bamboo Watch',
    //   description: 'Product Description',
    //   image: 'bamboo-watch.jpg',
    //   price: 65,
    //   category: 'Accessories',
    //   quantity: 24,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5,
    // },
  ];

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
