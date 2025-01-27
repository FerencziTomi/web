import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }  from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TitleLineComponent } from "../title-line/title-line.component";
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-menu',
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    TitleLineComponent,
    LoginComponent
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  
}
