import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'menu', component: MenuComponent }, 
    { path: 'main', component: MainComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'students', component: StudentsComponent },
    { path: '**', redirectTo: 'login' }
];
