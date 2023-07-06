import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCatalogoCuentasComponent } from './pages/admin/listado-catalogo-cuentas/listado-catalogo-cuentas.component';
import { CrearCuentaComponent } from './pages/admin/crear-cuenta/crear-cuenta.component';
import { ActualizarCuentaComponent } from './pages/admin/actualizar-cuenta/actualizar-cuenta.component';
import { ListadoTercerosComponent } from './pages/admin/listado-terceros/listado-terceros.component';
import { CrearTerceroComponent } from './pages/admin/crear-tercero/crear-tercero.component';
import { ActualizarTerceroComponent } from './pages/admin/actualizar-tercero/actualizar-tercero.component';
import { ListadoCuentasTComponent } from './pages/admin/listado-cuentas-t/listado-cuentas-t.component';
import { CrearCuentaTComponent } from './pages/admin/crear-cuenta-t/crear-cuenta-t.component';
import { ActualizarCuentaTComponent } from './pages/admin/actualizar-cuenta-t/actualizar-cuenta-t.component';
import { ListadoAsientosContableComponent } from './listado-asientos-contable/listado-asientos-contable.component';
import { CrearAsientoContableComponent } from './crear-asiento-contable/crear-asiento-contable.component';
import { ActualizarAsientoContableComponent } from './actualizar-asiento-contable/actualizar-asiento-contable.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';


const routes: Routes = [
  {
    path: 'admin', 
    component:DashboardComponent,  
    children:[
      {
        path: 'profile', 
        component:ProfileComponent
      },
      {
        path: '',
        component:BienvenidoComponent
      },
      {
        path: 'catalogoCuentas',
        component:ListadoCatalogoCuentasComponent 
      },
      {
        path: 'crearCuenta', 
        component:CrearCuentaComponent
      },
      {
        path: 'listadoTerceros', 
        component:ListadoTercerosComponent
      },
      {
        path: 'crearTercero', 
        component:CrearTerceroComponent
      },
      {
        path: 'listadoCuentasT', 
        component:ListadoCuentasTComponent
      },
      {
        path: 'crearCuentaT', 
        component:CrearCuentaTComponent
      },
      {
        path: 'actualizarCuenta/:id', 
        component:ActualizarCuentaComponent
      },
      {
        path: 'actualizarTercero/:id', 
        component:ActualizarTerceroComponent
      },
      {
        path: 'actualizarCuentaT/:id', 
        component:ActualizarCuentaTComponent
      }

    ]
  },
  {
    path: 'user-dashboard', 
    component:UserDashboardComponent,
    children:[
      
    ]
  },
  {path: '', component:HomeComponent, pathMatch:'full'},
  {path: 'signup', component:SignupComponent, pathMatch:'full'},
  {path: 'login', component:LoginComponent, pathMatch:'full'},
  {path: 'listadoAsientosContables', component:ListadoAsientosContableComponent},
  {path: 'crearAsientoContable', component:CrearAsientoContableComponent},
  {path: 'actualizarAsientoContable/:id', component:ActualizarAsientoContableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
