import { Component, OnInit, Input } from '@angular/core';
import SampleJson from '../../assets/ciudades.json';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() country: string;
  @Input() provincias=[];
  ciudades =[];

  constructor() { }

  ngOnInit() {
    if (this.country != undefined) {
      this.provincias = [];
      SampleJson.forEach(element => {
        if (element.pais == this.country) {
          this.provincias.push(element.provincia);
        }
      });
      console.log(`Provincias de ${this.country}: ${this.provincias}`)
    }
  }
  onSelectProvincia(provincia){
    this.ciudades=[]; 
    SampleJson.forEach(element => {
      if(element.provincia == provincia){
        this.ciudades.push(element.ciudad);
      }

    });
    console.log(`Ciudades de ${provincia}: ${this.ciudades }`)
  }

}
