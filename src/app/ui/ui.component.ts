import { Component, OnInit } from '@angular/core';
import { imc } from "../imc-h/imc-h"
import { clasificacion } from "../clasificacion-seedo-h/clasificacion-seedo-h"
import { piH } from "../pi-h/pi-h"
import { piM } from "../pi-m/pi-m"
import { StorageService } from '../services/storage.service';
import { UsersService } from '../services/users.service';
import { ResponseUser } from '../models/responseuser';
import { ResponseImc } from '../models/responseimc';
import { ImcApi } from '../models/imcapi';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  hombre = true;
  mujer = false;
  edad = null;
  altura = null;
  peso = null;
  pi = 0;
  imcLocal = 0;
  diaActual;
  clasificacion;
  imcs: Array<any>;


  constructor(private usersService: UsersService,
    private storageService: StorageService) {
    this.diaActual = new Date();
    try {
      this.usersService.consultarUser(new ResponseUser).subscribe((data: any) => {
        this.storageService.setSession("nombre", data.name);
        this.storageService.setSession("id", data.id);
        this.storageService.setSession("username", data.username);
        this.storageService.setSession("email", data.email);
        console.log(sessionStorage.getItem("nombre"));
        console.log(sessionStorage.getItem("id"));
        console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("email"));
      });
    } catch (error) {

    }

  }
  ngBeforeInit(): void {
  }

  ngOnInit(): void {
  }

  cambioH() {
    if (this.mujer) {
      this.mujer = false;
    }
  }

  cambioM() {
    if (this.hombre) {
      this.hombre = false;
    }
  }
  clasificaciones(imc:number){
    try {
      return this.clasificacion = clasificacion(imc);
    } catch (error) {
      
    }
  }

  calculos() {
    this.imcLocal = imc(this.peso, this.altura);
    if (this.hombre) {
      this.pi = piH(this.altura);
    } else {
      this.pi = piM(this.altura);
    }
    this.clasificacion = clasificacion(this.imcLocal);
    try {
      let imcnuevo = new ImcApi;
      imcnuevo.iduser=Number.parseInt(sessionStorage.getItem("id"));
      imcnuevo.imc=this.imcLocal;
      this.usersService.nuevoImc(imcnuevo).subscribe(data => {        
      });
    } catch (error) {
    }
  }

  historial() {
    try {
      this.usersService.consultarImc(new ResponseImc).subscribe(data => {
        this.imcs = data;
      });
    } catch (error) {
    }
  }

}
