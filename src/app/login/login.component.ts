import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private router: Router,
  ) { }

  login(email: string) {
    localStorage.setItem('userEmail', email);
    this.router.navigate(['']);
  }
}
