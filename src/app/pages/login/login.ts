
import { Component } from '@angular/core';
// compotentes do angular material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { M } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule,
     MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
