import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-line',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './title-line.component.html',
  styleUrl: './title-line.component.scss'
})
export class TitleLineComponent {
  constructor(private router: Router) {}

  logout(){
    this.router.navigateByUrl('/main')
  }
}
