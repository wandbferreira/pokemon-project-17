import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { pokemonTypeInfosMock } from '../../../../mocks/pokemon-type-infos.mock';
import { PokemonType } from '../../../shared/models/pokemon-type';

export interface PokemonFilter {
  name: string;
  type?: PokemonType;
}

@Component({
  selector: 'app-pokemon-list-filter',
  templateUrl: './pokemon-list-filter.component.html',
})
export class PokemonListFilterComponent {
  @Input() filter: PokemonFilter = {
    name: '',
  };

  typeInfos = pokemonTypeInfosMock;

  constructor(private router: Router) { }

  filterByName(name: string) {
    this.filter.name = name;
    this.router.navigate(['pokemons'], { queryParams: this.filter });
  }

  filterByType(type?: PokemonType) {
    this.filter.type = type;
    this.router.navigate(['pokemons'], { queryParams: this.filter });
  }
}
