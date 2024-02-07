import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { PersonaService } from "./persona.service";

export class Persona {
    id: number;
    nom: string;
    habitatge: string;
    tipus: string;

    constructor(id: number, nombre: string, habitatge: string, tipus: string) {
        this.id = id;
        this.nom = nombre;
        this.habitatge = habitatge;
        this.tipus = tipus;
    }
}