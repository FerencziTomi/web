import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import students from '../_files/students.json';


@Component({
  selector: 'app-students',
  imports: [
    CommonModule,
    MatListModule
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  studentsList:{id: number, email: string, phone: string, familyName: string, givenName: string, birthDate: string}[]=students;
}
