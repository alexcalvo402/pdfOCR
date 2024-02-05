import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
}
