import { Component } from '@angular/core';

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
    console.log(this.clientData);
  }


}