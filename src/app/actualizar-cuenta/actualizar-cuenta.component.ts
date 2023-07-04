import { Component, OnInit } from '@angular/core';
import { CatalogoCuenta } from '../catalogo-cuenta';
import { CatalogoCuentaService } from '../services/catalogo-cuenta.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cuenta',
  templateUrl: './actualizar-cuenta.component.html',
  styleUrls: ['./actualizar-cuenta.component.css']
})
export class ActualizarCuentaComponent implements OnInit{
  
  id:number;
  cuenta : CatalogoCuenta = new CatalogoCuenta();
  constructor(private cuentaServicio:CatalogoCuentaService, private router:Router, private route:ActivatedRoute){} 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cuentaServicio.obtenerCuentaPorId(this.id).subscribe(dato =>{
      this.cuenta = dato;
    },error => console.log(error));
    
  }

  irCatalogoCuenta(){
    this.router.navigate(['/catalogoCuentas']);
    swal('Cuenta actualizada', `La cuenta contable ${this.cuenta.nombreCuenta} ha sido actualizada con éxito`, 'success');
  }

  onSubmit(){
    this.cuentaServicio.actualizarCuenta(this.id, this.cuenta).subscribe(dato =>{
      this.irCatalogoCuenta();
    }, error => console.log(error));
  }
}
