import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { databasePath } from "src/environment/environment.prod";
import { PersonaService } from "./persona.service";

export class Persona {
    nom: string;
    habitatge: string;

    constructor(nombre: string, vivienda: string) {
        this.nom = nombre;
        this.habitatge = vivienda;
    }

}

