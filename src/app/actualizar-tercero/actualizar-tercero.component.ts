import { Component, OnInit } from '@angular/core';
import { Tercero } from '../tercero';
import { TerceroService } from '../tercero.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tercero',
  templateUrl: './actualizar-tercero.component.html',
  styleUrls: ['./actualizar-tercero.component.css']
})
export class ActualizarTerceroComponent implements OnInit{

  id:number;
  tercero : Tercero = new Tercero();
  constructor(private terceroServicio:TerceroService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.terceroServicio.obtenerTerceroPorId(this.id).subscribe(dato =>{
      this.tercero = dato;
    }, error => console.log(error));
  }

  irListadoTerceros(){
    this.router.navigate(['/listadoTerceros']);
    swal('Tercero actualizado', `El tercero ${this.tercero.nombre} ha sido actualizado con éxito`, 'success');
  }

  onSubmit(){
    this.terceroServicio.actualizarTercero(this.id, this.tercero).subscribe(dato =>{
      this.irListadoTerceros();
    }, error => console.log(error));
  }
}
