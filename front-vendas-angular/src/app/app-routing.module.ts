import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './features/clientes/components/cliente-list.component';
import { ProdutoListComponent } from './features/produtos/components/produto-list.component';
import { PedidoListComponent } from './features/pedidos/components/pedido-list.component';
import { LoginComponent } from './features/auth/components/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'pedidos', component: PedidoListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './features/clientes/components/cliente-list.component';
import { ProdutoListComponent } from './features/produtos/components/produto-list.component';
import { PedidoListComponent } from './features/pedidos/components/pedido-list.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'pedidos', component: PedidoListComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */