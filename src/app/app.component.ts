import { Component } from '@angular/core';
import { Cliente } from './service/Cliente';
import { ClienteserviceService } from './service/clienteservice.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';  
  myFormUser : FormGroup;
  submitted = false;

  constructor(public servc:ClienteserviceService){}

  ngOnInit(){
    
    this.myFormUser = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl('')
    });
  }

  ingresarDatos(){
    let nombre = this.myFormUser.value.nombre;
    let apellido = this.myFormUser.value.apellido;

    this.servc.addUsers(nombre, apellido).subscribe(r=>{
     
      this.myFormUser = new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
      });
    })
  }

  onSubmit() {
    this.submitted = true;
    alert('Logrado! \n\n' + JSON.stringify(this.myFormUser.value))
}
 
  
}
