import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent implements OnInit {
  selectedItem: any | undefined = undefined;
  itemTypes = [];
  itemForm!: FormGroup;
  addOrUpdate: string = 'Add';
  constructor(private router: Router, private itemService: ItemService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initialiseItemForm();
    this.selectedItem = this.itemService.getData();
    if(this.selectedItem ) {
      this.addOrUpdate = 'Update';
      this.itemForm.setValue({
        itemName: this.selectedItem.name,
        itemType: this.selectedItem.item_type,
        active: this.selectedItem.active,
      });
    }
    this.loadItemTypes();
  }

  loadItemTypes() {
    this.itemService.getItemTypes().subscribe((res: any) => this.itemTypes = res);
  }

  initialiseItemForm() {
    this.itemForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]], // Item Name is required and must be at least 3 characters
      itemType: ['', Validators.required], // Item Type is required
      active: [false] // Active is a boolean, so no validation needed
    });
  }

   // Method to submit the form
   onSubmit(): void {
    let addOrUpdatePayload;
    if (this.itemForm?.valid) {
      if(this.selectedItem) {
        addOrUpdatePayload = {
          name: this.itemForm.value.itemName,
          active: this.itemForm.value.active,
          item_type: this.itemForm.value.itemType,
        }
        this.itemService.updateItem(addOrUpdatePayload, this.selectedItem['_id']).subscribe((res: any) => {
          alert(res.message);
        });
      } else {
        addOrUpdatePayload = {
          name: this.itemForm.value.itemName,
          active: this.itemForm.value.active,
          item_type: this.itemForm.value.itemType,
        }
        this.itemService.addItem(addOrUpdatePayload).subscribe((res: any) => alert(res.message));
      }

    }
  }
}
