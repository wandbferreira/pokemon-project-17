import { PokemonService } from '../../pokemon.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../../shared/models/pokemon';
import { Observable } from 'rxjs';
import { pokemonsMock } from '../../../../../mocks/pokemons.mock';
import { Confirmable } from '../../../../shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-pokemon-pokebola',
  templateUrl: './pokemon-pokebola.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPokebolaComponent implements OnInit {
  pokemons$!: Observable<Pokemon[]>;
  total = pokemonsMock.length;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getCaptures();
  }

  @Confirmable('Deseja realmente libertar todos os pokemons?')
  free() {
    this.pokemonService.freeCaptures();
  }
}
