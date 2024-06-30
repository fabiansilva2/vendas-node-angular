import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: any[] = []; // Inicializa como um array vazio de qualquer tipo de objeto

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Especifica o tipo de retorno como um array de any
    this.http.get<any[]>('/api/clientes').subscribe(
      (data) => {
        this.clientes = data; // Atribui os dados recebidos à propriedade clientes
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    );
  }

}
