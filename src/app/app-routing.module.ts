import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCatalogoCuentasComponent } from './listado-catalogo-cuentas/listado-catalogo-cuentas.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ListadoTercerosComponent } from './listado-terceros/listado-terceros.component';
import { CrearTerceroComponent } from './crear-tercero/crear-tercero.component';
import { ActualizarTerceroComponent } from './actualizar-tercero/actualizar-tercero.component';
import { ListadoCuentasTComponent } from './listado-cuentas-t/listado-cuentas-t.component';
import { CrearCuentaTComponent } from './crear-cuenta-t/crear-cuenta-t.component';
import { ActualizarCuentaTComponent } from './actualizar-cuenta-t/actualizar-cuenta-t.component';
import { ListadoAsientosContableComponent } from './listado-asientos-contable/listado-asientos-contable.component';
import { CrearAsientoContableComponent } from './crear-asiento-contable/crear-asiento-contable.component';
import { ActualizarAsientoContableComponent } from './actualizar-asiento-contable/actualizar-asiento-contable.component';

const routes: Routes = [
  {path: 'catalogoCuentas', component:ListadoCatalogoCuentasComponent},
  {path: "", redirectTo:'catalogoCuentas', pathMatch:'full'},
  {path: 'crearCuenta', component:CrearCuentaComponent},
  {path: 'actualizarCuenta/:id', component:ActualizarCuentaComponent},
  {path: 'listadoTerceros', component:ListadoTercerosComponent},
  {path: 'crearTercero', component:CrearTerceroComponent},
  {path: 'actualizarTercero/:id', component:ActualizarTerceroComponent},
  {path: 'listadoCuentasT', component:ListadoCuentasTComponent},
  {path: 'crearCuentaT', component:CrearCuentaTComponent},
  {path: 'actualizarCuentaT/:id', component:ActualizarCuentaTComponent},
  {path: 'listadoAsientosContables', component:ListadoAsientosContableComponent},
  {path: 'crearAsientoContable', component:CrearAsientoContableComponent},
  {path: 'actualizarAsientoContable/:id', component:ActualizarAsientoContableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
