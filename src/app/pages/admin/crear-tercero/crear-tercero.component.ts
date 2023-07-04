import { Component, OnInit } from '@angular/core';
import { Tercero } from '../../../tercero';
import { CatalogoCuentaService } from '../../../services/catalogo-cuenta.service';
import { Route, Router } from '@angular/router';
import swal from 'sweetalert2';
import { TerceroService } from '../../../services/tercero.service';

@Component({
  selector: 'app-crear-tercero',
  templateUrl: './crear-tercero.component.html',
  styleUrls: ['./crear-tercero.component.css']
})
export class CrearTerceroComponent implements OnInit{

  tercero : Tercero = new Tercero();
  constructor(private terceroServicio:TerceroService, private router:Router){}
  
  ngOnInit(): void {
  }

  guardarTercero(){
    this.terceroServicio.crearTercero(this.tercero).subscribe(dato =>{
      console.log(dato);
      this.irListadoTerceros();
    }, error => console.log(error));
  }

  irListadoTerceros(){
    this.router.navigate(['/listadoTerceros']);
    swal('Tercero registrado', `El tercero ${this.tercero.nombre} ha sido creado con éxito`, 'success');
  }

  onSubmit(){
    this.guardarTercero();
  }
}
