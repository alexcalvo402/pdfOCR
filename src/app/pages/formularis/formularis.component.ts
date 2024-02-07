import { Component } from '@angular/core';
import { Persona } from 'src/models/classes/persona';

@Component({
  selector: 'app-formularis',
  templateUrl: './formularis.component.html',
  styleUrls: ['./formularis.component.scss']
})
export class FormularisComponent {
  treballadorData = {
    nom: '',
    habitatge: ''
  };

  clientData = {
    nom: '',
    habitatge: ''
  };

  onSubmit() {
    console.log(this.treballadorData);
  }

  ngAfterViewInit(){
    Persona.getPersona(4);
  }
}