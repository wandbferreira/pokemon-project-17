import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private route2: ActivatedRoute
  ) {}

  login(email: string) {
    const x = 1;
    this.route.data;
    this.route2.data;
    localStorage.setItem('userEmail', email);
    this.router.navigate(['contato']);
  }
}
