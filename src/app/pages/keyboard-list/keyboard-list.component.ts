import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { IKeyboard } from '../../models/keyboard';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { TablaDataComponent } from '../../components/tabla-data/tabla-data.component';

@Component({
  selector: 'app-keyboard-list',
  standalone: true,
  imports: [HttpClientModule,TablaDataComponent],
  templateUrl: './keyboard-list.component.html',
  styleUrl: './keyboard-list.component.css',
  providers: [ProductService]
})
export default class KeyboardListComponent implements OnInit{
  keyboardList:IKeyboard[] = [];
  columnas:string[] = [];
  title:string='Keyboards';
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.columnas = getEntityPropiedades('keyboard');
    this.productService.obtenerKeyBoardList().subscribe((data)=>{
      this.keyboardList = data;
      console.log(this.keyboardList);
    })
  }
  onAction(accion:Accion) {
    if(accion.accion=="Editar"){
      this.editar(accion.fila);
    }else if(accion.accion=="Eliminar"){
      this.eliminar(accion.fila.nombre);
    }
  }
  eliminar(nombre: any) {
    console.log("eliminar",nombre);
  }
  editar(obejto: any) {
    console.log("editar",obejto);
  }
}
