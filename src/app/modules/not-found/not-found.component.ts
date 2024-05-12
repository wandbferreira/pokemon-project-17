import { TrainerService } from '../trainer/trainer.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    console.log('[NOT-FOUND] Melhor treinador aqui eh: ', this.trainerService.topTrainer);
  }
}
