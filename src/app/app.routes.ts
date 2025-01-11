import { Routes } from '@angular/router';
import MouseListComponent from './pages/mouse-list/mouse-list.component';
import KeyboardListComponent from './pages/keyboard-list/keyboard-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'',redirectTo:'Login',pathMatch:'full'},
    {path:'KeyboardList',component:KeyboardListComponent},
    {path:'MouseList',component:MouseListComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path:'products',component:ProductsComponent}
];
