import { Component, OnInit } from '@angular/core';
import { Tercero } from '../tercero';
import { CatalogoCuentaService } from '../catalogo-cuenta.service';
import { Router } from '@angular/router';
import { TerceroService } from '../tercero.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-terceros',
  templateUrl: './listado-terceros.component.html',
  styleUrls: ['./listado-terceros.component.css']
})
export class ListadoTercerosComponent implements OnInit {
  
  tercero:Tercero[];
  constructor(private terceroServicio:TerceroService, private router:Router){}
  
  ngOnInit(): void {
    this.obtenerTerceros();
  }

  private obtenerTerceros(){
    this.terceroServicio.obtenerListadoTerceros().subscribe(dato=>{
      this.tercero = dato;
    })
  }

  actualizarTercero(id:number){
    this.router.navigate(['actualizarTercero', id]);
  }

  eliminarTercero(id:number){
    swal({
      title: 'Eliminar tercero',
      text: "Confirma que desea eliminar el tercero",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Si, eliminarlo',
      cancelButtonText: 'No , cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) =>{
      if(result.value){
        this.terceroServicio.eliminarTercero(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerTerceros();
          swal(
            'Tercero eliminado',
            'El tercero ha sido eliminado con éxito',
            'success'
          )
        })
      }
    })
  }
}
