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

  clasificaciones(imc: number) {
    try {
      return this.clasificacion = clasificacion(imc);
    } catch (error) {

    }
  }

  calculos() {
    if (this.peso == null || this.altura == null || this.edad == null) {
      alert("Falta llenar datos");
    } else {
      this.peso=parseInt(this.peso);
      this.altura=parseInt(this.altura);
      this.edad=parseInt(this.edad);
      try {
        this.imcLocal = imc(this.peso, this.altura);
        if (this.hombre) {
          this.pi = piH(this.altura);
        } else {
          this.pi = piM(this.altura);
        }
        if (isNaN(this.peso)||isNaN(this.altura)||isNaN(this.edad)) {
          this.peso=null;
          this.edad=null;
          this.altura=null;
          alert("Datos introducidos inválidos. Asegurate de ingresar números.");
        }else{
          this.clasificacion = clasificacion(this.imcLocal);
          location.href = sessionStorage.getItem("url").toString().slice(1, -1)+"#openModal";
        }
        try {
          let imcnuevo = new ImcApi;
          imcnuevo.iduser = Number.parseInt(sessionStorage.getItem("id"));
          imcnuevo.imc = this.imcLocal;
          this.usersService.nuevoImc(imcnuevo).subscribe(data => {
          });
        } catch (error) {
        }
      } catch (error) {
        alert("Datos introducidos inválidos. Asegurate de ingresar números.");
      }
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
