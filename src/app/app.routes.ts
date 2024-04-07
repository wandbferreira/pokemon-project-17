import { Routes } from '@angular/router';
import { delay, from, map } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      from(import('./pokemon/pokemon.module')).pipe(
        map((m) => m.PokemonsModule),
        delay(1500),
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      from(import('./not-found/not-found.component')).pipe(
        map(c => c.NotFoundComponent),
        delay(800),
      ),
  },
];
