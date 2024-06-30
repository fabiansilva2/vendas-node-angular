import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ItemVendaComponent } from './item-venda/item-venda.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarItensVendaComponent } from './listar-itens-venda/listar-itens-venda.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'item-venda', component: ItemVendaComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'listar-clientes', component: ListarClientesComponent },
  { path: 'listar-item-venda', component: ListarItensVendaComponent },
  { path: 'listar-pedidos', component: ListarPedidosComponent },
  { path: '', redirectTo: '/listar-clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
