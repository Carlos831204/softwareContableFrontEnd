import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoCatalogoCuentasComponent } from './listado-catalogo-cuentas/listado-catalogo-cuentas.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FormsModule } from '@angular/forms';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ListadoTercerosComponent } from './listado-terceros/listado-terceros.component';
import { CrearTerceroComponent } from './crear-tercero/crear-tercero.component';
import { ActualizarTerceroComponent } from './actualizar-tercero/actualizar-tercero.component';
import { CrearCuentaTComponent } from './crear-cuenta-t/crear-cuenta-t.component';
import { ActualizarCuentaTComponent } from './actualizar-cuenta-t/actualizar-cuenta-t.component';
import { ListadoCuentasTComponent } from './listado-cuentas-t/listado-cuentas-t.component';
import { ListadoAsientosContableComponent } from './listado-asientos-contable/listado-asientos-contable.component';
import { ActualizarAsientoContableComponent } from './actualizar-asiento-contable/actualizar-asiento-contable.component';
import { CrearAsientoContableComponent } from './crear-asiento-contable/crear-asiento-contable.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoCatalogoCuentasComponent,
    CrearCuentaComponent,
    ActualizarCuentaComponent,
    ListadoTercerosComponent,
    CrearTerceroComponent,
    ActualizarTerceroComponent,
    CrearCuentaTComponent,
    ActualizarCuentaTComponent,
    ListadoCuentasTComponent,
    ListadoAsientosContableComponent,
    ActualizarAsientoContableComponent,
    CrearAsientoContableComponent
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
