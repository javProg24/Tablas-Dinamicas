import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { BodyComponent } from "./body/body.component";
interface SideNavToogle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isSideNavCollapsed=false;
  screenWidth=0;
  onToogleSidenav(data:SideNavToogle):void {
    this.screenWidth=data.screenWidth
    this.isSideNavCollapsed=data.collapsed
  }
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'Tablas-Dinamicas';
}
