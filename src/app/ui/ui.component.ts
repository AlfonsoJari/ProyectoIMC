import { Component, OnInit } from '@angular/core';
import { imc } from "../imc-h/imc-h"
import { clasificacion } from "../clasificacion-seedo-h/clasificacion-seedo-h"
import { piH } from "../pi-h/pi-h"
import { piM } from "../pi-m/pi-m"

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  hombre=true;
  mujer=false;
  edad=null;
  altura=null;
  peso=null;
  pi=0;
  imcLocal=0;
  diaActual;
  clasificacion;
  

  constructor() {
    this.diaActual=new Date();
   }

  ngOnInit(): void {
  }

  cambioH(){
    if(this.mujer=true){
      this.mujer=false;
    } 
  }

  cambioM(){
    if(this.hombre=true){
      this.hombre=false;
    }
  }

  calculos() {
    this.imcLocal = imc(this.peso, this.altura);
    if(this.hombre){
      this.pi = piH(this.altura);
    } else {
      this.pi = piM(this.altura);
    }
    this.clasificacion = clasificacion(this.imcLocal);
  }

}
