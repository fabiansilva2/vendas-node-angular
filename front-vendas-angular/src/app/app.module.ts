import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ClienteComponent } from './cliente/cliente.component';
import { ItemVendaComponent } from './item-venda/item-venda.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarItensVendaComponent } from './listar-itens-venda/listar-itens-venda.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ItemVendaComponent,
    PedidoComponent,
    ListarClientesComponent,
    ListarItensVendaComponent,
    ListarPedidosComponent,
    ClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
