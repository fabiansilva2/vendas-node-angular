import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-venda',
  templateUrl: './item-venda.component.html',
  styleUrls: ['./item-venda.component.css']
})
export class ItemVendaComponent {
  item = {
    nome: '',
    marca: '',
    grupo: '',
    preco: '',
    valor: '',
    saldoEstoque: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('/api/item-venda', this.item).subscribe(response => {
      console.log(response);
    });
  }
}
