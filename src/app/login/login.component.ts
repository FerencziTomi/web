import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  form: FormGroup;
  error: string | null = null;
  isLoggedIn=false;

  constructor(private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pw: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  
  login() {
    if(this.form.get('email')?.value === 'testadmin@gmail.com' && this.form.get('pw')?.value === 'admin1234'){
      this.loginSuccess.emit();
      console.log('idáig eljutott');
    }
    else{
      alert('Hibás email cím vagy jelszó!')
    }
  }
  
}
