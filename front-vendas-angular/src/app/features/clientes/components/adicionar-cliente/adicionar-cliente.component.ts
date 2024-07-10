import { Component } from '@angular/core';
import { ClienteService } from '../../../../core/services/cliente.service';
import { Cliente } from '../../../../core/models/cliente.model';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    endereco: ''
  };

  constructor(private clienteService: ClienteService) {}

  onSubmit() {
    this.clienteService.createCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente adicionado com sucesso', response);
        // Redirecionar ou exibir mensagem de sucesso
      },
      error => {
        console.error('Erro ao adicionar cliente', error);
      }
    );
  }
}