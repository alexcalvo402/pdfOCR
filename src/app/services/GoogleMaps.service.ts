import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { firstValueFrom } from 'rxjs';
import { apikey } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor(private httpService: HttpClient) { 
  }

  calculateDistance(userOrigin: any, userDestination:any):Promise<any>{
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?`;
    let params = {
      "origins": "C/ Miquel Servet 20, 2n, OLOT",
      "destinations": "C/ Roser 48, 2n 5a, OLOT",
      "units":"metric",
      "key":apikey
    }

    url += new URLSearchParams(params).toString();

    return firstValueFrom(this.httpService.get(url)).then((data)=>{
      console.log(data);
    })
    


   
    
  }


}
