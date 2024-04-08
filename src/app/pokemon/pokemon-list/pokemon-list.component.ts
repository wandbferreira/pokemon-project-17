import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonFilter } from '../pokemon-list-filter/pokemon-list-filter.component';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = pokemonsMock;
  filter: PokemonFilter = {
    name: '',
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filterPokemons();
  }

  private filterPokemons() {
    this.route.queryParams.subscribe(params => {
      console.log('filtrar:', params);
      this.filter.name = params['name'] ?? '';
      this.filter.type = params['type'] ?? undefined;

      const filterByName = (p: Pokemon): boolean => {
        if (!params['name']) {
          return true;
        }
        const name = params['name'].toLowerCase();
        return p.name.toLowerCase().includes(name);
      };

      const filterByType = (p: Pokemon): boolean => {
        if (!params['type']) {
          return true;
        }
        return p.type.includes(params['type']);
      };

      this.pokemons = pokemonsMock
        .filter(filterByName)
        .filter(filterByType);
    });
  }

}
