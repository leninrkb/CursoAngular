import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-crear-editar-producto',
  templateUrl: './crear-editar-producto.component.html',
  styleUrls: ['./crear-editar-producto.component.css']
})
export class CrearEditarProductoComponent {
  productoForm!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router){
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
  }
}
