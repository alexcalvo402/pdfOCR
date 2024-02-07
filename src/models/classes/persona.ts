import { databasePath } from "src/environment/environment.prod";

export class Persona {
    nom: string;
    habitatge: string;

    constructor(nombre: string, habitatge: string) {
        this.nom = nombre;
        this.habitatge = habitatge;
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

