import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AsientoContable } from '../asiento-contable';
import { ActivatedRoute, Router } from '@angular/router';
import { AsientoContableService } from '../asiento-contable.service';

@Component({
  selector: 'app-actualizar-asiento-contable',
  templateUrl: './actualizar-asiento-contable.component.html',
  styleUrls: ['./actualizar-asiento-contable.component.css']
})
export class ActualizarAsientoContableComponent implements OnInit{

  id:number;
  asientoContable : AsientoContable = new AsientoContable();
  constructor(private asientoContableServicio:AsientoContableService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.asientoContableServicio.obtenerAsientoContablePorId(this.id).subscribe(dato =>{
      this.asientoContable = dato;
    }, error => console.log(error));
  }

  irAsientosContables(){
    this.router.navigate(['/listadoAsientosContables']);
    swal('Asiento contable actualizado', `El asiento contable ${this.asientoContable.codigoCuenta} ha sido actualizado con éxito`, 'success');
  }

  onSubmit(){
    this.asientoContableServicio.actualizarAsientoContable(this.id, this.asientoContable).subscribe(dato =>{
      this.irAsientosContables();
    }, error => console.log(error));
  }
}
