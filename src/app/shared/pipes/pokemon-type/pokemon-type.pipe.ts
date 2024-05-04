import { pokemonTypeInfosMock } from './../../../../mocks/pokemon-type-infos.mock';
import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '../../models/pokemon-type';

@Pipe({
  name: 'pokemonType',
  standalone: true,
})
export class PokemonTypePipe implements PipeTransform {
  transform(type: PokemonType): string | undefined {
    return pokemonTypeInfosMock.find(t => t.type === type)?.name ?? '?';
  }
}
