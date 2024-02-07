import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { databasePath } from 'src/environment/environment.prod';
import { Persona } from './persona';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    url = "localhost:80/persona.php"
    constructor(private http: HttpClient) {
        
    }

    insert(persona:Persona) {
        this.http.post(`localhost:80/persona`,JSON.stringify(persona));
    }

    update(persona:Persona) {
        let id = persona.id;
        this.http.put<Persona>(`localhost:80/persona/${id}`, JSON.stringify(persona));
    }

    get(id: number): any {
        this.http.get(`localhost:80/persona/${id}`).subscribe(res => {
            console.log(res);
        })
    }

    remove(id:number):any{
        this.http.delete(`localhost:80/persona/${id}`);
    }

}