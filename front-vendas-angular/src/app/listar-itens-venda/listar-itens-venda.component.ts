import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-itens-venda',
  templateUrl: './listar-itens-venda.component.html',
  styleUrls: ['./listar-itens-venda.component.css']
})
export class ListarItensVendaComponent implements OnInit {
  itensVenda: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/api/itens-venda').subscribe(data => {
      this.itensVenda = data;
    });
  }
}
