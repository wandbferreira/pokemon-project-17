import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonFilterPipe } from './../../../shared/pipes/pokemon-filter/pokemon-filter.pipe';
import { TrainerService } from './../../../shared/services/trainer.service';
import { PokemonFilter } from './../pokemon-filters/pokemon-filters.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filter: PokemonFilter = {};

  constructor(private trainerService: TrainerService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemons = this.activatedRoute.snapshot.data['pokemons'];
    this.trainerService.topTrainer = 'Misty';
    console.log('[POKEMON-LIST] Melhor treinador aqui eh: ', this.trainerService.topTrainer);
  }

  /**
   * Mudar campos do objeto Pokemon pode ser necessário reaplicar @see PokemonFilterPipe
   * Já que PokemonFilterPipe é pura
   */
  refreshPokemons() {
    this.pokemons = [...this.pokemons];
  }

  toTitlecase(str: string) {
    console.log('titlecase...');
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
  }
}
