import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { PersonaService } from "./persona.service";

export class Persona {
    nom: string;
    habitatge: string;
    tipus: string;

    constructor(nombre: string, habitatge: string, tipus: string) {
        this.nom = nombre;
        this.habitatge = habitatge;
        this.tipus = tipus;
    }
}