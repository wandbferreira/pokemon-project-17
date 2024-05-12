import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonService } from './pokemon.service';

export const pokemonsResolver: ResolveFn<Observable<Pokemon[]>> = () => {
  const pokemonService = inject(PokemonService);
  return pokemonService.getPokemons();
};

export const pokemonResolver: ResolveFn<Observable<Pokemon>> = snapshot => {
  const pokemonService = inject(PokemonService);
  return pokemonService.getPokemon(Number(snapshot.params['id']));
};

export const evolutionsResolver: ResolveFn<Observable<Pokemon[]>> = snapshot => {
  const pokemonService = inject(PokemonService);
  return pokemonService.getEvolutions(Number(snapshot.params['id']));
};

export const trainerNamesResolver: ResolveFn<Observable<string[]>> = () => {
  return of(['Ash Ketchum', 'Misty', 'Brock', 'May']);
};
