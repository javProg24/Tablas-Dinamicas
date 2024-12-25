import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKeyboard } from '../models/keyboard';
import { IMouse } from '../models/mouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlkey = "/json/keyboardList.json";
  private urlmo = "/json/mouseList.json";
  constructor(private http:HttpClient) { }
  obtenerKeyBoardList():Observable<IKeyboard[]>{
    return this.http.get<IKeyboard[]>(this.urlkey);
  }
  obtenerMouseList():Observable<IMouse[]>{
    return this.http.get<IMouse[]>(this.urlmo);
  }
}
