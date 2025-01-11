import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
interface SideNavToogle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidenav',
  imports: [NgFor, RouterLink,NgIf,NgClass,MatIconModule, MatButtonModule,RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output()onToogleSidenav:EventEmitter<SideNavToogle>=new EventEmitter();
  collapsed=false;
  screenWidth=0;
  closeSidenav():void {
    this.collapsed=!this.collapsed
    this.onToogleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  toogleCollapse():void {
    this.collapsed=true
    this.onToogleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  
  navData=navbarData
}
