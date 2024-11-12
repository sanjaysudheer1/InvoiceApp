import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from '../items/items.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { AddItemComponent } from '../add-item/add-item.component';
import { ItemService } from './item.service';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'add-item', component: AddItemComponent
      },
      {
        path: 'edit-item', component: AddItemComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ItemsComponent, AddItemComponent],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    DropdownModule,
    CheckboxModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [provideHttpClient(), ItemService]
})
export class ItemModule {}
