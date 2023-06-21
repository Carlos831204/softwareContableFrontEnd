import { Component, OnInit } from '@angular/core';
import { CatalogoCuenta } from '../catalogo-cuenta';
import { CatalogoCuentaService } from '../catalogo-cuenta.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit{

  cuenta : CatalogoCuenta = new CatalogoCuenta();
  constructor(private cuentaServicio:CatalogoCuentaService, private router:Router) {}

  ngOnInit(): void {
  }

  guardarCuenta(){
    this.cuentaServicio.crearCuenta(this.cuenta).subscribe(dato =>{
      console.log(dato);
      this.irCatalogoCuenta();
    }, error => console.log(error));
  }

  irCatalogoCuenta(){
    this.router.navigate(['/catalogoCuentas']);
    swal('Cuenta registrada', `La cuenta contable ${this.cuenta.nombreCuenta} ha sido creada con éxito`, 'success');
  }

  onSubmit(){
    this.guardarCuenta();
  }

}
