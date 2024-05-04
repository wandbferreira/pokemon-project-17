import { PokemonService } from '../../../shared/services/pokemon.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { Observable } from 'rxjs';
import { pokemonsMock } from '../../../../mocks/pokemons.mock';

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

  free() {
    this.pokemonService.freeCaptures();
  }
}
