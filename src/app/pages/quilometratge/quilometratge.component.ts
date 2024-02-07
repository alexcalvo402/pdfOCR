import { Component } from '@angular/core';

@Component({
  selector: 'app-quilometratge',
  templateUrl: './quilometratge.component.html',
  styleUrls: ['./quilometratge.component.scss']
})
export class QuilometratgeComponent {
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

  treballadors = [
    {
      id: 1,
      nom: 'Pep',
      habitatge: 'C/ Blai 33'
    },
    {
      id: 2,
      nom: 'Maria',
      habitatge: 'C/ Blai 32'
    },
    {
      id: 3,
      nom: 'Joan',
      habitatge: 'C/ Blai 31'
    }
  ];

  selTreballador() {
    // Find the selected treballador
    let treballadorInfo = this.treballadors.find(treballador => treballador.id == this.treballadorSelectedData.id);
    this.treballadorSelectedData = treballadorInfo!;

    // Hide the treballador selection
    this.ocultarTreballador = true;
  }

}