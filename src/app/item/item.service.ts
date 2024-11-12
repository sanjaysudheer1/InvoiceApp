import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = environment.apiUrl;
  private data: string | null = null;

  setData(data: string) {
    this.data = data;
  }

  getData(): string | null {
    return this.data;
  }
  constructor(private http: HttpClient) {}

  getItemTypes() {
    return this.http.get(`${this.apiUrl}/item_types`);
  }

  getItems() {
    return this.http.get(`${this.apiUrl}/items`);
  }

  addItem(payload: any) {
    return this.http.post(`${this.apiUrl}/item`, payload);
  }

  updateItem(payload: any, id: any) {
    return this.http.put(`${this.apiUrl}/item/${id}`, payload);
  }

  deleteItem(id: any) {
    return this.http.delete(`${this.apiUrl}/item/${id}`);
  }
}
