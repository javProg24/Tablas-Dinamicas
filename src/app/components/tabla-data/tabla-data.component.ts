import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Accion } from '../../models/tabla-columna';

@Component({
  selector: 'app-tabla-data',
  imports: [],
  templateUrl: './tabla-data.component.html',
  styleUrl: './tabla-data.component.css'
})
export class TablaDataComponent {
  title='';
  columnas:string[] = [];
  dataSource:any=[]

  @Input()set titulo(title:any){
    this.title = title;
  }
  @Input()set columns(columnas:any){
    this.columnas = columnas;
  }
  @Input()set data(dataSource:any){
    this.dataSource = dataSource;
  }
  @Output()action:EventEmitter<Accion> = new EventEmitter();
  onAction(accion:string, row?:any){
    this.action.emit({accion:accion, fila: row});
  }
}
