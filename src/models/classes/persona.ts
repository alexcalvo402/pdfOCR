import { databasePath } from "src/environment/environment.prod";

export class Persona {
    nom: string;
    habitatge: string;

    constructor(nombre: string, vivienda: string) {
        this.nom = nombre;
        this.habitatge = vivienda;
    }

    save(){

    }

    update(){

    }

    public static get(id:number):any{
        fetch(databasePath).then((response)=>{
            console.log(response);
        })
        return undefined;
    }
}

