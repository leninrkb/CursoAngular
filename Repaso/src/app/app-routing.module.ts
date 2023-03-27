import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEditarProductoComponent } from './components/crear-editar-producto/crear-editar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path:'', component:ListarProductosComponent},
  {path:'crear', component:CrearEditarProductoComponent},
  {path:'editar/:id', component:CrearEditarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
