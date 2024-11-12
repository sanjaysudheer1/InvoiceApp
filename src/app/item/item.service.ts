import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getItemTypes() {
    return this.http.get(`${this.apiUrl}/item_types`);
  }

  getItems() {
    return this.http.get(`${this.apiUrl}/items`);
  }
}
