import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {

  url = 'https://j3nmgz27f2.execute-api.us-east-1.amazonaws.com/dev/user';

  constructor(private httpc:HttpClient) { }

  //POST
  addUsers(nombre:string, apellido:string){
    let obj = {nombre, apellido};
    return this.httpc.post(this.url, obj);
  }

}
