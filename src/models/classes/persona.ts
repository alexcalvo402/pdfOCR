import { databasePath } from "src/environment/environment.prod";

export class Persona {
    nom: string;
    habitatge: string;
    tipus: string;

    constructor(nombre: string, habitatge: string, tipus: string) {
        this.nom = nombre;
        this.habitatge = habitatge;
        this.tipus = tipus;
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

