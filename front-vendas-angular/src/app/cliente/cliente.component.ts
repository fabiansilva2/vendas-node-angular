import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente = {
    nome: '',
    telefone: '',
    email: '',
    endereco: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('/api/clientes', this.cliente).subscribe(response => {
      console.log(response);
    });
  }
}
