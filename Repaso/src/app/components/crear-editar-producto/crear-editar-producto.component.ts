import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-editar-producto',
  templateUrl: './crear-editar-producto.component.html',
  styleUrls: ['./crear-editar-producto.component.css']
})
export class CrearEditarProductoComponent {
  productoForm!:FormGroup;

  constructor(private fb:FormBuilder){
    this.productoForm = fb.group({
      nombre: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required],
    })
  }

  agregarProducto(){
    // console.log(this.productoForm.controls['nombre'].touched);
  }
}
