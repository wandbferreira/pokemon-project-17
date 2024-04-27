import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

export const pokemonResolver: ResolveFn<Observable<Pokemon>> = (snapshot) => {
  const pokemonService = inject(PokemonService);
  return pokemonService.getPokemon(snapshot.params['id']);
};

export const evolutionsResolver: ResolveFn<Observable<Pokemon[]>> = (
  snapshot
) => {
  const pokemonService = inject(PokemonService);
  return pokemonService.getEvolutions(snapshot.params['id']);
};

export const trainersResolver: ResolveFn<Observable<string[]>> = () => {
  return of(['Ash Ketchum', 'Misty', 'Brock', 'May']);
};
