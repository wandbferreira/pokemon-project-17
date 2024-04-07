import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '../../models/pokemon-type';

@Pipe({
  name: 'pokemonType',
  standalone: true
})
export class PokemonTypePipe implements PipeTransform {

  transform(type: PokemonType): string | undefined {
    return new Map<PokemonType, string>([
      ['grass', 'Terra'],
      ['fire', 'Fogo'],
      ['water', 'Água'],
      ['thunder', 'Raio'],
      ['bug', 'Inseto'],
    ]).get(type) ?? '-';
  }

}
