import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MenuComponent,
    LoginComponent,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';
  isLoggedIn=false;

  onLoginSuccess() {
    this.isLoggedIn = true;
  }
}
