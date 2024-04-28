import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private evolutionsMap = new Map<number, number[]>([
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

  /**
   * Retorna as evoluções de um pokemon
   */
  getEvolutions(pokemonId: number): Observable<Pokemon[]> {
    const ids = this.evolutionsMap.get(pokemonId);
    const evolutions = pokemonsMock.filter(p => ids?.includes(p.id));

    return of(evolutions ?? []).pipe(delay(500));
  }

  /**
   * Retorna um pokemon pelo id
   */
  getPokemon(pokemonId: number): Observable<Pokemon> {
    const pokemon = pokemonsMock.find(p => p.id === pokemonId);
    if (!pokemon) {
      return throwError(() => 'Pokemon Not Found');
    }
    return of(pokemon).pipe(delay(400));
  }

  /**
   * Retonra todos os pokemons
   */
  getPokemons(): Observable<Pokemon[]> {
    return of(pokemonsMock);
  }

  /**
   * Captura um pokemon
   */
  capture(pokemon: Pokemon) {
    console.log('Te capturei!', pokemon.name);
    const captures = this.getCaptures();
    captures.push(pokemon);
    localStorage.setItem('captures', JSON.stringify(captures));
  }

  /**
   * Retorna a lista de pokemons capturados
   */
  getCaptures(): Pokemon[] {
    return JSON.parse(localStorage.getItem('captures') || '[]') || [];
  }

  /**
   * Retorna true se o pokemon foi capturado pelo usuário
   */
  isCaptured(pokemonId: number): boolean {
    return this.getCaptures()
      .map(c => c.id)
      .includes(pokemonId);
  }

  /**
   * Liberta os pokemons capturados
   */
  freeCaptures() {
    localStorage.setItem('captures', '[]');
  }
}
