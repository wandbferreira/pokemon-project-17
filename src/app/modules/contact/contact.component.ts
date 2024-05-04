import { Component } from '@angular/core';
import { UnsavedComponent } from '../../shared/guards/unsaved.guard';
import { Observable, delay, of } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements UnsavedComponent {
  saved = false;

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
