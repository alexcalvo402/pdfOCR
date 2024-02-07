import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/GoogleMaps.service';
import { Persona } from 'src/models/classes/persona/persona';
import { PersonaService } from 'src/models/classes/persona/persona.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {


  constructor(private gmapsService: GoogleMapsService) {

  }



}
