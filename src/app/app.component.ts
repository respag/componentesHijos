import { Component, OnInit } from '@angular/core';
import SampleJson from '../assets/ciudades.json';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  pais: string;
  paises=[];
  provincias=[];

  constructor(){ }

  ngOnInit(): void {
    SampleJson.forEach(el => {
      this.paises.push(el.pais);
    });
    console.log('Arreglo de Países:');
    console.log(this.paises);
  }

  onSelectPais(pais) { 
    this.provincias = [];
    SampleJson.forEach(element => {
      if (element.pais == pais) {
        this.provincias.push(element.provincia);
        this.pais = pais;
      }
    });
    console.log(`Provincias de ${pais}: ${this.provincias}`);
  } 

  displayProv(prov) {
    $(".resultado").text(`Ha seleccionado la provincia de: ${prov}`);
  }
}