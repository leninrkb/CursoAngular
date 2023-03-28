import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-editar-producto',
  templateUrl: './crear-editar-producto.component.html',
  styleUrls: ['./crear-editar-producto.component.css']
})
export class CrearEditarProductoComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  productoForm!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private _snackBar: MatSnackBar){
    this.productoForm = fb.group({
      nombre: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required],
    })
  }

  agregarProducto(){
    const PRODUCTO:Producto = {
      nombre: this.productoForm.value.nombre,
      categoria: this.productoForm.value.categoria,
      ubicacion: this.productoForm.value.ubicacion,
      precio: this.productoForm.value.precio,
    }
    this.router.navigate(['/']);
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Registro guardado','', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
