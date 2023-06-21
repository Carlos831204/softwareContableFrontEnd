import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { CuentaT } from '../cuenta-t';
import { CuentaTService } from '../cuenta-t.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-cuentas-t',
  templateUrl: './listado-cuentas-t.component.html',
  styleUrls: ['./listado-cuentas-t.component.css']
})
export class ListadoCuentasTComponent implements OnInit{

  cuentaT:CuentaT[];
  constructor(private cuentaTServicio:CuentaTService, private router:Router){}

  ngOnInit(): void {
    this.obtenerCuentasT();
  }

  private obtenerCuentasT(){
    this.cuentaTServicio.obtenerListadoCuentasT().subscribe(dato =>{
      this.cuentaT = dato;
    })
  }

  actualizarCuentaT(id:number){
    this.router.navigate(['actualizarCuentaT', id]);
  }

  eliminarCuentaT(id:number){
    swal({
      title: 'Eliminar cuentaT',
      text: "Confirma que desea eliminar la cuentaT",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Si, eliminarla',
      cancelButtonText: 'No , cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) =>{
      if(result.value){
        this.cuentaTServicio.eliminarCuentaT(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerCuentasT();
          swal(
            'CuentaT eliminada',
            'La cuentaT ha sido eliminada con éxito',
            'success'
          )
        })
      }
    })
  }
}
