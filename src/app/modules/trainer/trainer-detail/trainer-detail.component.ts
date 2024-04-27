import { AfterViewInit, Component } from '@angular/core';
import { Trainer } from '../../../shared/models/trainer';
import { LoadingService } from './../../../shared/services/loading.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
})
export class TrainerDetailComponent implements AfterViewInit {
  trainer: Trainer = {
    id: 1,
    name: 'Ash Ketchum',
    location: 'Pallet Town',
    age: 10,
  };

  constructor(private loadingService: LoadingService) { }

  ngAfterViewInit() {
    this.loadingService.stop();
  }
}
