import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/GoogleMaps.service';
import { Persona } from 'src/models/classes/persona';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  formData = {
    nom: '',
    habitatge: ''
  };

  onSubmit() {
    console.log(this.formData);
  }

  constructor(private gmapsService: GoogleMapsService) {

  }

  ngAfterViewInit(){
    Persona.getPersona(4);
  }


}
