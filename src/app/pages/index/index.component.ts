import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/GoogleMaps.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent { 

constructor(private gmapsService: GoogleMapsService){
  
}


}
