import { Component } from '@angular/core';
import { Trainer } from '../../../shared/models/trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
})
export class TrainerDetailComponent {
  trainer: Trainer = {
    id: 1,
    name: 'Ash Ketchum',
    location: 'Pallet Town',
    age: 10,
  };
}
