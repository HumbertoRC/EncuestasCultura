import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Mock de login
    if (this.email === 'admin@empresa.com' && this.password === 'admin123') {
      localStorage.setItem('currentUser', JSON.stringify({ id: 'admin-001', roleId: 1 }));
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
