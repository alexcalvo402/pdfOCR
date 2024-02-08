import { Component, inject } from '@angular/core';
import { PersonaService } from 'src/models/classes/persona/persona.service';

@Component({
  selector: 'app-quilometratge',
  templateUrl: './quilometratge.component.html',
  styleUrls: ['./quilometratge.component.scss']
})
export class QuilometratgeComponent {
  protected personaService:PersonaService = inject(PersonaService);
  
  ocultarTreballador = false;

  treballadorSelectedData = {
    id: 0,
    nom: '',
    habitatge: ''
  };

  quilometratgeData = {
    data: '',
    dePersona: 0,
    aPersona: 0,
  };

  treballadors:any;

  ngAfterViewInit(){
    this.personaService.get().subscribe((data)=>{
      this.treballadors = data;
    })
  }
  

  selTreballador() {
    // Find the selected treballador
    let treballadorInfo = this.treballadors.find((treballador:any) => treballador.id == this.treballadorSelectedData.id);
    this.treballadorSelectedData = treballadorInfo!;

    // Hide the treballador selection
    this.ocultarTreballador = true;
  }

}