import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AsientoContable } from '../asiento-contable';
import { AsientoContableService } from '../asiento-contable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-asientos-contable',
  templateUrl: './listado-asientos-contable.component.html',
  styleUrls: ['./listado-asientos-contable.component.css']
})
export class ListadoAsientosContableComponent implements OnInit{
  
  asientoContable:AsientoContable[];
  constructor(private asientoContableServicio:AsientoContableService, private router:Router){}

  ngOnInit(): void {
    this.obtenerAsientosContables();
  }

  private obtenerAsientosContables(){
    this.asientoContableServicio.obtenerListadoAsientosContables().subscribe(dato =>{
      this.asientoContable = dato;
    })
  }

  actualizarAsientoContable(id:number){
    this.router.navigate(['actualizarAsientoContable', id]);
  }

  eliminarAsientoContable(id:number){
    swal({
      title: 'Eliminar Asiento Contable',
      text: "Confirma que desea eliminar el Asiento Contable",
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
        this.asientoContableServicio.eliminarAsientoContable(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerAsientosContables();
          swal(
            'Asiento Contable eliminado',
            'El asiento contable  ha sido eliminado con éxito',
            'success'
          )
        })
      }
    })
  }
}
