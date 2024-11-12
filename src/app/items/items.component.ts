import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routesConstants } from '../routes_constants';
import { ItemService } from '../item/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent implements OnInit {
  constructor(private router: Router, private itemService: ItemService) {}
  items = [];
  ngOnInit(): void {
    this.loadItemsList();
  }
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  loadItemsList() {
    this.itemService.getItems().subscribe((res: any) => this.items = res)
  }
  

  editItem(item: any) {
    this.itemService.setData(item);
    this.router.navigate(['/' + routesConstants.EDIT_ITEM]);
  }

  deleteItem(item: any) {
    this.itemService.deleteItem(item['_id']).subscribe((res: any) => {
      if(res.message === 'Item deleted successfully') {
        this.loadItemsList()
      }
    });
  }
}
