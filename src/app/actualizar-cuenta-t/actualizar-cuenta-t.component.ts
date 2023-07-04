import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { CuentaT } from '../cuenta-t';
import { CuentaTService } from '../services/cuenta-t.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cuenta-t',
  templateUrl: './actualizar-cuenta-t.component.html',
  styleUrls: ['./actualizar-cuenta-t.component.css']
})
export class ActualizarCuentaTComponent implements OnInit{

  id:number;
  cuentaT : CuentaT = new CuentaT();
  constructor(private cuentaTServicio:CuentaTService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cuentaTServicio.obtenerCuentaTPorId(this.id).subscribe(dato =>{
      this.cuentaT = dato;
    }, error => console.log(error));
  }

  irCuentasT(){
    this.router.navigate(['/listadoCuentasT']);
    swal('CuentaT actualizada', `La cuentaT ${this.cuentaT.codigoCuentaT} ha sido actualizada con éxito`, 'success');
  }

  onSubmit(){
    this.cuentaTServicio.actualizarCuentaT(this.id, this.cuentaT).subscribe(dato =>{
      this.irCuentasT();
    }, error => console.log(error));
  }

}
