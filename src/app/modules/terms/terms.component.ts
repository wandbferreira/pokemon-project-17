import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Confirmable } from '../../shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './terms.component.html',
})
export class TermsComponent {
  termsAccepted: boolean = false;

  constructor(private router: Router) {}

  @Confirmable()
  confirm(): void {
    localStorage.setItem('termsAccepted', 'true');
    this.router.navigate(['/pokemons/pokebola']);
  }
}
