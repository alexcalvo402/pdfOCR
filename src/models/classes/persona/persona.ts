import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { PersonaService } from "./persona.service";

export class Persona {
    id!:string;
    nom: string;
    habitatge: string;
    tipus: string;

    constructor(id: string, nombre: string, habitatge: string, tipus: string) {
        this.id = id;
        this.nom = nombre;
        this.habitatge = habitatge;
        this.tipus = tipus;
    }
}