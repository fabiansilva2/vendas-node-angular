import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  pedido = {
    clienteId: 0,
    itemVendaId: 0,
    quantidade: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/pedidos', this.pedido).subscribe(response => {
      console.log(response);
      // Reset the form
      this.pedido = { clienteId: 0, itemVendaId: 0, quantidade: 0 };
    });
  }
}
