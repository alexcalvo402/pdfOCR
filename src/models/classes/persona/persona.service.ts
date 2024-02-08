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

    insert(persona:Persona) {
        console.log(persona);
        this.http.post(`http://localhost/persona`,persona).subscribe((data)=>{
            console.log(data);
        });
    }

    update(persona:Persona) {
        let id = persona.id;
        this.http.put<Persona>(`http://localhost/persona/${id}`, JSON.stringify(persona));
    }

    get(id: number): any {
        this.http.get(`http://localhost/persona/${id}`).subscribe(res => {
            console.log(res);
        })
    }

    remove(id:number):any{
        this.http.delete(`http://localhost/persona/${id}`);
    }

    test(){
        this.http.get(`http://localhost`).subscribe((data)=>{
            console.log(data);
        })
    }

}