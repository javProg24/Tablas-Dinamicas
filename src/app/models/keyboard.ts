// interfaz para el modelo de datos de teclados
export interface IKeyboard {
    nombre:string;
    Color:string;
    Category:string;
    Price:number;
}

export class keyboardResponse{
    nombre='';
    Color='';
    Category='';
    Price=0;
}