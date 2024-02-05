import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor() { 

  }

  calculateDistance(user1: any, user2:any){

    let position1 = user1.address;
    let position2 = user2.address;
    
  }


}
