import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../../shared/models/pokemon';
import { TrainerService } from '../../../trainer/trainer.service';
import { PokemonFilterPipe } from './../../pipes/pokemon-filter.pipe';
import { PokemonFilter } from '../pokemon-filter/pokemon-filter.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
   * Mudar campos do objeto Pokemon exige re-filtrar
   * Já que a Pipe não é pura: @see PokemonFilterPipe
   */
  reFilter() {
    this.filter = { ...this.filter };
  }

  toTitlecase(str: string) {
    console.log('titlecase...');
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
  }
}
