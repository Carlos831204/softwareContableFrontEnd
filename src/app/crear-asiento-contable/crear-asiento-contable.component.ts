import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AsientoContable } from '../asiento-contable';
import { AsientoContableService } from '../asiento-contable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-asiento-contable',
  templateUrl: './crear-asiento-contable.component.html',
  styleUrls: ['./crear-asiento-contable.component.css']
})
export class CrearAsientoContableComponent implements OnInit{

  asientoContable:AsientoContable = new AsientoContable();
  constructor(private asientoContableServicio:AsientoContableService, private router:Router) {}

  ngOnInit(): void {
  }

  guardarAsientoContable(){
    this.asientoContableServicio.crearAsientoContable(this.asientoContable).subscribe(dato =>{
      console.log(dato);
      this.irAsientoContable();
    }, error => console.log(error));
  }

  irAsientoContable(){
    this.router.navigate(['/listadoAsientosContables']);
    swal('Asiento contable registrado', `El asiento contable ${this.asientoContable.codigoCuenta} ha sido creado con éxito`, 'success');
  }

  onSubmit(){
    this.guardarAsientoContable();
  }

}
