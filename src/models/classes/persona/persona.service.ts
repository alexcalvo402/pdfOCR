import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { databasePath } from 'src/environment/environment.prod';
import { Persona } from './persona';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    constructor(private http: HttpClient) {

    }

    save(persona:Persona) {
        
    }

    update(persona:Persona) {

    }

    get(id: number): any {
        this.http.get(databasePath).subscribe(res => {
            console.log(res);
        })
    }

}