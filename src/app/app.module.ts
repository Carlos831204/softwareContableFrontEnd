import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoCatalogoCuentasComponent } from './pages/admin/listado-catalogo-cuentas/listado-catalogo-cuentas.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearCuentaComponent } from './pages/admin/crear-cuenta/crear-cuenta.component';
import { FormsModule } from '@angular/forms';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ListadoTercerosComponent } from './pages/admin/listado-terceros/listado-terceros.component';
import { CrearTerceroComponent } from './pages/admin/crear-tercero/crear-tercero.component';
import { ActualizarTerceroComponent } from './actualizar-tercero/actualizar-tercero.component';
import { CrearCuentaTComponent } from './pages/admin/crear-cuenta-t/crear-cuenta-t.component';
import { ActualizarCuentaTComponent } from './actualizar-cuenta-t/actualizar-cuenta-t.component';
import { ListadoCuentasTComponent } from './pages/admin/listado-cuentas-t/listado-cuentas-t.component';
import { ListadoAsientosContableComponent } from './listado-asientos-contable/listado-asientos-contable.component';
import { ActualizarAsientoContableComponent } from './actualizar-asiento-contable/actualizar-asiento-contable.component';
import { CrearAsientoContableComponent } from './crear-asiento-contable/crear-asiento-contable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';

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
    CrearAsientoContableComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
