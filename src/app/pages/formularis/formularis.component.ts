import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/models/classes/persona/persona';
import { PersonaService } from 'src/models/classes/persona/persona.service';

@Component({
  selector: 'app-formularis',
  templateUrl: './formularis.component.html',
  styleUrls: ['./formularis.component.scss']
})
export class FormularisComponent {

  constructor(private personaService:PersonaService){}

  treballadorData:Persona = {
    nom: '',
    habitatge: '',
    tipus: 'T',
  };

  clientData = {
    nom: '',
    habitatge: '',
    tipus: 'C'
  };


  onSubmit() {
    console.log(this.treballadorData);
  }

  onSubmitTreballador(){
    console.log(this.treballadorData);

    this.personaService.insert(this.treballadorData);
  }

  ngAfterViewInit(){
    this.personaService.test();
  }


}