import { Component, Input, input } from '@angular/core';

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
}
