import { Component } from '@angular/core';
import { UnsavedComponent } from '../../shared/guards/unsaved.guard';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements UnsavedComponent {
  saved = false;

  save(): Observable<void> {
    console.log('salvando....');

    return of(undefined).pipe(delay(3000));
  }
}
