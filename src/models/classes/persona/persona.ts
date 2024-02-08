import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { PersonaService } from "./persona.service";

export interface Persona {
    id?:string;
    nom: string;
    habitatge: string;
    tipus: string;
}