import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { CuentaT } from '../../../cuenta-t';
import { CuentaTService } from '../../../services/cuenta-t.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta-t',
  templateUrl: './crear-cuenta-t.component.html',
  styleUrls: ['./crear-cuenta-t.component.css']
})
export class CrearCuentaTComponent implements OnInit{

  cuentaT:CuentaT = new CuentaT();
  constructor(private cuentaTServicio:CuentaTService, private router:Router) {}

  ngOnInit(): void {
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
