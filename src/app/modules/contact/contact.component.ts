import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, delay, of } from 'rxjs';
import { UnsavedComponent } from '../../shared/guards/unsaved.guard';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements UnsavedComponent {
  saved = false;

  email = '';
  phone = '';
  message = '';

  constructor(private router: Router) {}

  save(): Observable<void> {
    console.log('salvando....');
    this.saved = true;

    return of(undefined).pipe(delay(2000));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
