import { Routes } from '@angular/router';
import { delay, from, map } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      from(import('./login/login.component')).pipe(
        map(c => c.LoginComponent),
        delay(800),
      ),
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      from(import('./pokemon/pokemon.module')).pipe(
        map(m => m.PokemonModule),
      ),
  },
  {
    path: 'treinadores',
    loadChildren: () =>
      from(import('./trainer/trainer.module')).pipe(
        map(c => c.TrainerModule),
        delay(800),
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
