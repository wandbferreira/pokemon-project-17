import { Pokemon } from './../models/pokemon';
import { Pipe, PipeTransform } from '@angular/core';
import { pokemonsMock } from '../../../mocks/pokemons.mock';


@Pipe({
  name: 'pokemonEvolutions',
  standalone: true
})
export class PokemonEvolutionsPipe implements PipeTransform {
  private map = new Map<number, Pokemon[]>([
    [1, [pokemonsMock[0], pokemonsMock[1], pokemonsMock[2]]],
    [2, [pokemonsMock[0], pokemonsMock[1], pokemonsMock[2]]],
    [3, [pokemonsMock[0], pokemonsMock[1], pokemonsMock[2]]],
    [4, [pokemonsMock[3], pokemonsMock[4], pokemonsMock[5]]],
    [5, [pokemonsMock[3], pokemonsMock[4], pokemonsMock[5]]],
    [6, [pokemonsMock[3], pokemonsMock[4], pokemonsMock[5]]],
    [7, [pokemonsMock[5], pokemonsMock[6], pokemonsMock[7]]],
    [8, [pokemonsMock[5], pokemonsMock[6], pokemonsMock[7]]],
    [9, [pokemonsMock[5], pokemonsMock[6], pokemonsMock[7]]],
  ]);

  transform(pokemon: Pokemon): Pokemon[] {
    return this.map.get(pokemon.id) ?? [];
  }

}
