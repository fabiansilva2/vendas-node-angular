import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemVenda } from '../models/item-venda';

@Injectable({
  providedIn: 'root'
})
export class ItemVendaService {
  private apiUrl = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ItemVenda[]> {
    return this.http.get<ItemVenda[]>(this.apiUrl);
  }

  save(itemVenda: ItemVenda): Observable<ItemVenda> {
    return this.http.post<ItemVenda>(this.apiUrl, itemVenda);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
