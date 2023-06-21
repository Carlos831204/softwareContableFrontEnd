import { Component, OnInit } from '@angular/core';
import { CatalogoCuenta } from '../catalogo-cuenta';
import { CatalogoCuentaService } from '../catalogo-cuenta.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-catalogo-cuentas',
  templateUrl: './listado-catalogo-cuentas.component.html',
  styleUrls: ['./listado-catalogo-cuentas.component.css']
})
export class ListadoCatalogoCuentasComponent implements OnInit {
  
  catalogoCuentas:CatalogoCuenta[];

  constructor(private catalogoCuentaServicio:CatalogoCuentaService, private router:Router) { }
  
  ngOnInit(): void {
    this.obtenerCuentasCatalogo();
  }

  actualizarCuenta(id:number){
    this.router.navigate(['actualizarCuenta', id]);
  }

  private obtenerCuentasCatalogo(){
    this.catalogoCuentaServicio.obtenerListadoCatalgoCuentas().subscribe(dato =>{
      this.catalogoCuentas = dato;
    })
  }

  eliminarCuenta(id:number){
    swal({
      title: 'Eliminar cuenta contable',
      text: "Confirma que desea eliminar la cuenta contable",
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
        this.catalogoCuentaServicio.eliminarCuenta(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerCuentasCatalogo();
          swal(
            'Cuenta contable eliminada',
            'La cuenta contable ha sido eliminada con éxito',
            'success'
          )
        })
      }
    })
  }
}
