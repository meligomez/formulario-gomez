import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carga-datos',
  templateUrl: './carga-datos.component.html',
  styleUrls: ['./carga-datos.component.css']
})
export class CargaDatosComponent implements OnInit {

  constructor( ) { }
  alojamientoModel!: FormGroup;
  mostrarRta: boolean=false;

  ngOnInit(): void {
    this.alojamientoModel = new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      localidad: new FormControl('',[Validators.required,Validators.minLength(2)]),
      contacto: new FormControl('',[Validators.pattern('[1-9]*')])

    });
  }



  get nombre() { return this.alojamientoModel.get('nombre')!; }
  get localidad() { return this.alojamientoModel.get('localidad')!; }
  get contacto() { return this.alojamientoModel.get('contacto')!; }


  guardar(){
    console.log(this.alojamientoModel.value)
    console.log(this.alojamientoModel.valid)
    this.mostrarRta=true;
  }
}
