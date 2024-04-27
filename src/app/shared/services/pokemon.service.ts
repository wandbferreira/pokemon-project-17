import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private map = new Map<number, number[]>([
    [1, [1, 2, 3]],
    [2, [1, 2, 3]],
    [3, [1, 2, 3]],
    [4, [4, 5, 6]],
    [5, [4, 5, 6]],
    [6, [4, 5, 6]],
    [7, [7, 8, 9]],
    [8, [7, 8, 9]],
    [9, [7, 8, 9]],
  ]);

  constructor() { }

  getEvolutions(pokemonId: number): Observable<Pokemon[]> {
    const ids = this.map.get(Number(pokemonId));
    const evolutions = pokemonsMock.filter(p => ids?.includes(p.id));

    return of(evolutions ?? []).pipe(delay(500));
  }

  getPokemon(pokemonId: number): Observable<Pokemon> {
    const pokemon = pokemonsMock.find(p => p.id === Number(pokemonId));
    if (!pokemon) {
      return throwError(() => 'Pokemon Not Found');
    }
    return of(pokemon).pipe(delay(400))
  }

  getPokemons(): Observable<Pokemon[]>{
    return of(pokemonsMock);
  }
}
