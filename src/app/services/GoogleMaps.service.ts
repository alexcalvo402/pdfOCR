import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { firstValueFrom } from 'rxjs';
import { apikey } from 'src/environment/environment';
import { Persona} from 'src/models/classes/persona';
@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor(private httpService: HttpClient) { 
  }

  calculateDistance(userOrigin: Persona, userDestination:Persona):Promise<any>{
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?`;
    let params = {
      "origins": userOrigin.vivienda,
      "destinations": userDestination.vivienda,
      "units":"metric",
      "key":apikey
    }

    url += new URLSearchParams(params).toString();

    return firstValueFrom(this.httpService.get(url)).then((data)=>{
      console.log(data);
    })
  
    
  }


}
