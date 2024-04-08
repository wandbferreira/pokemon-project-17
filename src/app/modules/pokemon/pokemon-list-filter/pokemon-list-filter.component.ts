import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonType } from '../../../shared/models/pokemon-type';

export interface PokemonFilter {
  name: string;
  type?: PokemonType;
}

@Component({
  selector: 'app-pokemon-list-filter',
  templateUrl: './pokemon-list-filter.component.html',
  styleUrl: './pokemon-list-filter.component.scss',
})
export class PokemonListFilterComponent {
  @Input() filter: PokemonFilter = {
    name: '',
  };

  constructor(private router: Router) { }

  filterByName(name: string) {
    this.filter.name = name;
    this.router.navigate(['pokemons/lista'], { queryParams: this.filter })
  }

  filterByType(type?: PokemonType) {
    this.filter.type = type;
    this.router.navigate(['pokemons/lista'], { queryParams: this.filter })
  }
}
