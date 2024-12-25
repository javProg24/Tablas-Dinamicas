import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IMouse } from '../../models/mouse';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { HttpClientModule } from '@angular/common/http';
import { TablaDataComponent } from '../../components/tabla-data/tabla-data.component';

@Component({
  selector: 'app-mouse-list',
  standalone: true,
  imports: [HttpClientModule,TablaDataComponent],
  templateUrl: './mouse-list.component.html',
  styleUrl: './mouse-list.component.css',
  providers: [ProductService]
})
export default class MouseListComponent implements OnInit{
  mouseList:IMouse[] = [];
  columnas:string[] = [];
  title:string='Mouses';
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.columnas = getEntityPropiedades('mouse');
    this.productService.obtenerMouseList().subscribe((data)=>{
      this.mouseList = data;
      console.log(this.mouseList);
    })
  }
  
  onAction(accion: Accion) {
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
