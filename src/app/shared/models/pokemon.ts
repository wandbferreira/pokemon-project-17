import { PokemonType } from './pokemon-type';

export interface Pokemon {
  id: number;
  name: string;
  type: PokemonType;
  image: string;
  skills?: string[];
}
