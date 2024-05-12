import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemonsMock } from '../../../../../mocks/pokemons.mock';
import { Pokemon } from '../../../../shared/models/pokemon';
import { TrainerService } from '../../../../shared/services/trainer.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  evolutions: Pokemon[] = [];
  trainers: string[] = [];
  enemies = pokemonsMock;
  topTrainer$ = this.trainerService.topTrainer;

  constructor(private activatedRoute: ActivatedRoute, private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.pokemon = data['pokemon'];
      this.evolutions = data['evolutions'];
      this.trainers = data['trainers'];

      console.log('[POKEMON-DETAIL] Melhor treinador aqui eh: ', this.trainerService.topTrainer);
    });
  }
}
