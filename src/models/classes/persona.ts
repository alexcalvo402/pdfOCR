import { databasePath } from "src/environment/environment.prod";

export class Persona {
    nom: string;
    habitatge: string;

    constructor(nombre: string, vivienda: string) {
        this.nom = nombre;
        this.habitatge = vivienda;
    }

    guardar(){

    }

    public static getPersona(id:number):any{
        fetch(databasePath).then((response)=>{
            console.log(response);
        })
        return undefined;
    }
}

