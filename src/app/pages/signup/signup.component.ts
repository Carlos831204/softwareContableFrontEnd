import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user ={
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar){}

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre usuario es requerido!!', 'Aceptar', {
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition : 'center' 
      });
      return;
    }

    if(this.user.password == '' || this.user.password == null){
      this.snack.open('El password es requerido!!', 'Aceptar', {
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition : 'center' 
      });
      return;
    }

    if(this.user.nombre == '' || this.user.nombre == null){
      this.snack.open('El nombre es requerido!!', 'Aceptar', {
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition : 'center' 
      });
      return;
    }

    if(this.user.apellido == '' || this.user.apellido == null){
      this.snack.open('El apellido es requerido!!', 'Aceptar', {
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition : 'center' 
      });
      return;
    }

    if(this.user.email == '' || this.user.email == null){
      this.snack.open('El email es requerido!!', 'Aceptar', {
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition : 'center' 
      });
      return;
    }

    if(this.user.telefono == '' || this.user.telefono == null){
      this.snack.open('El teléfono es requerido!!', 'Aceptar', {
        duration : 5000,
        verticalPosition : 'top',
        horizontalPosition : 'center' 
      });
      return;
    }

    this.userService.insertarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        swal('Usuario registrado', `Usuario registrado con éxito`, 'success');
      },(error) =>{
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema!!', 'Aceptar', {
          duration : 5000,
          verticalPosition : 'top',
          horizontalPosition : 'center' 
        });
      }
    )
  }
}
