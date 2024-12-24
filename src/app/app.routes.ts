import { Routes } from '@angular/router';
import MouseListComponent from './pages/mouse-list/mouse-list.component';
import KeyboardListComponent from './pages/keyboard-list/keyboard-list.component';

export const routes: Routes = [
    {path:'KeyboardList',component:KeyboardListComponent},
    {path:'MouseList',component:MouseListComponent},
];
