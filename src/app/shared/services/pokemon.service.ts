import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, delay, of, throwError } from 'rxjs';
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

  captures$!: Subject<Pokemon[]>;

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

    const captures: Pokemon[] = JSON.parse(localStorage.getItem('captures') || '[]') || [];
    captures.push(pokemon);
    localStorage.setItem('captures', JSON.stringify(captures));
    this.captures$.next(captures);
  }

  /**
   * Retorna a lista de pokemons capturados
   */
  getCaptures(): Observable<Pokemon[]> {
    if (!this.captures$) {
      const captures: Pokemon[] = JSON.parse(localStorage.getItem('captures') || '[]') || [];
      this.captures$ = new BehaviorSubject<Pokemon[]>(captures);
    }

    return this.captures$.asObservable();
  }

  /**
   * Retorna true se o pokemon foi capturado pelo usuário
   */
  isCaptured(pokemonId: number): boolean {
    const captures: Pokemon[] = JSON.parse(localStorage.getItem('captures') || '[]') || [];

    return captures.map(c => c.id).includes(pokemonId);
  }

  /**
   * Liberta os pokemons capturados
   */
  freeCaptures() {
    localStorage.setItem('captures', '[]');
    this.captures$.next([]);
  }
}
