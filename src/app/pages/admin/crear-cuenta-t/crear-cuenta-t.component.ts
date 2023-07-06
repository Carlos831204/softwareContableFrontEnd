import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { CuentaT } from '../../../cuenta-t';
import { CuentaTService } from '../../../services/cuenta-t.service';
import { Router } from '@angular/router';
import { CatalogoCuentaService } from 'src/app/services/catalogo-cuenta.service';
import { TerceroService } from 'src/app/services/tercero.service';

@Component({
  selector: 'app-crear-cuenta-t',
  templateUrl: './crear-cuenta-t.component.html',
  styleUrls: ['./crear-cuenta-t.component.css']
})
export class CrearCuentaTComponent implements OnInit{

  cuentaT:CuentaT = new CuentaT();

  cuentas:any =[];
  cuentaTData = {
    codigo:{
      codigoCuenta: ''
    },
    nombre:{
      nombreCuenta: ''
    },
    tercero:{
      idTercero:''
    },
    debito:'',
    credito:''
  }

  constructor(
    private cuentaTServicio:CuentaTService, 
    private catalogoCuentaServicio:CatalogoCuentaService,
    private listadoTerceroServicio:TerceroService, 
    private router:Router) {}

  ngOnInit(): void {
    this.catalogoCuentaServicio.obtenerListadoCatalgoCuentas().subscribe(
      (dato:any) =>{
        this.cuentas = dato;
        console.log(this.cuentas); 
      }, (error) =>{
        console.log(error);
        swal("Error!!", 'Error al cargar las cuentas', 'error');
      }
    )
    /*this.listadoTerceroServicio.obtenerListadoTerceros().subscribe(
      (dato:any) =>{
        this.cuentas = dato;
        console.log(this.cuentas); 
      }, (error) =>{
        console.log(error);
        swal("Error!!", 'Error al cargar las cuentas', 'error');
      }
    )*/
  }

  guardarCuentaT(){
    this.cuentaTServicio.crearCuentaT(this.cuentaT).subscribe(dato =>{
      console.log(dato);
      this.irCuentasT();
    }, error => console.log(error));
  }

  irCuentasT(){
    this.router.navigate(['/listadoCuentasT']);
    swal('CuentaT registrada', `La cuentaT ${this.cuentaT.codigoCuentaT} ha sido creada con éxito`, 'success');
  }

  onSubmit(){
    this.guardarCuentaT();
  }

}
