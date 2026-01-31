
import { Component } from '@angular/core';

// abilitações para formulários reativos
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// tipos de componentes Angular Material usados no formulário de login
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { M } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
}
