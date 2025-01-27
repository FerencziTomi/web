import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import teachers from '../_files/teachers.json';

@Component({
  selector: 'app-teachers',
  imports: [
    MatListModule,
    CommonModule
  ],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent {
  teachersList:{id: number, email: string, phone: string, title: string, familyName: string, givenName: string, birthDate: string, webside: string}[]=teachers;
}
