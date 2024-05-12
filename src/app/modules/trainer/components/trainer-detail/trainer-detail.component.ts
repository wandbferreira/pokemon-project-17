import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../../shared/models/pokemon';
import { Trainer } from '../../../../shared/models/trainer';
import { TrainerService } from '../../trainer.service';
import { PokemonService } from '../../../pokemon/pokemon.service';

const trainerServiceInstance: TrainerService = {
  topTrainer: 'Ash',
};

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  providers: [
    {
      provide: TrainerService,
      useValue: trainerServiceInstance,
    },
  ],
})
export class TrainerDetailComponent implements OnInit {
  trainer: Trainer = {
    id: 1,
    name: 'Ash Ketchum',
    location: 'Pallet Town',
    age: 10,
  };

  team: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => {
      this.team = pokemons;
    });

    // this.trainerService.topTrainer = 'Leon';
    console.log('[TRAINER-DETAIL] Melhor treinador aqui eh: ', this.trainerService.topTrainer);
  }
}
