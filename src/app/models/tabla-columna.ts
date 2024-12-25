import { keyboardResponse } from "./keyboard";
import { MouseResponse as mouseResponse } from "./mouse";

export interface Accion<T = any> {
    accion: string;
    fila?: T;
}

export const getEntityPropiedades = (entidad:string):Array<any>=> {
    let resultados: any= [];
    let clase:any;
    switch (entidad) {
        case 'keyboard':
            clase=new keyboardResponse();break;
        case 'mouse':
            clase=new mouseResponse();break;
    }
    if(clase){
        resultados = Object.keys(clase);
    }
    return resultados;
}