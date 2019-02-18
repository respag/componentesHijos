import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import SampleJson from '../../assets/ciudades.json';
import { Guid } from "guid-typescript";
import * as $ from 'jquery';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() country: string;
  @Input() provincias=[];
  @Output() provChange =new EventEmitter();
  provSeleccionada:string;
  ciudades =[];
  idProv:string;
  idCiudad:string;

  constructor() { 
    this.idProv="selProv-"+ Guid.create();
    this.idCiudad=`selCiudad-${Guid.create()}`;
  }

  ngOnInit() {
    if (this.country != undefined) {
      this.provincias = [];
      SampleJson.forEach(element => {
        if (element.pais == this.country) {
          this.provincias.push(element.provincia);
        }
      });
      console.log(`Provincias de ${this.country}: ${this.provincias}`);
      
    }
  }
  
  onSelectProvincia(provincia){
    this.ciudades=[]; 
    SampleJson.forEach(element => {
      if(element.provincia == provincia){
        this.ciudades.push(element.ciudad);
      }
    });
    console.log(`Ciudades de ${provincia}: ${this.ciudades }`);
    $("#" +this.idCiudad).toggleClass("pintado");
  }

  provinciaCambiada() { 
    this.provSeleccionada =  $("#"+this.idProv).val();
    this.provChange.emit(this.provSeleccionada );
  }
}