import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '../../models/pokemon-type';
import { pokemonTypeInfosMock } from '../../../../mocks/pokemon-type-infos.mock';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true,
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: PokemonType): string {
    return pokemonTypeInfosMock.find(t => t.type === type)?.color ?? 'lightgray';
  }
}
