import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent implements OnInit {
  itemTypes = [];
  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.loadItemTypes();
  }

  loadItemTypes() {
    this.itemService.getItemTypes().subscribe((res: any) => this.itemTypes = res);
  }
}
