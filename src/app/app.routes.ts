import { Routes } from '@angular/router';
import { delay, from, map } from 'rxjs';
import { loggedGuard } from './shared/guards/logged.guard';
import { unsavedGuard } from './shared/guards/unsaved.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      from(import('./modules/login/login.component')).pipe(
        map(c => c.LoginComponent),
        delay(800)
      ),
  },
  {
    path: 'contato',
    canDeactivate: [unsavedGuard],
    loadComponent: () =>
      from(import('./modules/contact/contact.component')).pipe(
        map(c => c.ContactComponent),
        delay(800)
      ),
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      from(import('./modules/pokemon/pokemon.module')).pipe(map(m => m.PokemonModule)),
  },
  {
    path: 'treinadores',
    canActivate: [loggedGuard],
    loadChildren: () =>
      from(import('./modules/trainer/trainer.module')).pipe(
        map(c => c.TrainerModule),
        delay(200)
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      from(import('./modules/not-found/not-found.component')).pipe(
        map(c => c.NotFoundComponent),
        delay(800)
      ),
  },
];
