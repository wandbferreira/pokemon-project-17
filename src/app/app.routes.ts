import { Routes } from '@angular/router';
import { delay, from } from 'rxjs';
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
      from(import('./modules/login/login.component').then(c => c.LoginComponent)).pipe(delay(0)),
  },
  {
    path: 'termos',
    loadComponent: () =>
      from(import('./modules/terms/terms.component').then(c => c.TermsComponent)).pipe(delay(0)),
  },
  {
    path: 'contato',
    canDeactivate: [unsavedGuard],
    loadComponent: () =>
      from(import('./modules/contact/contact.component').then(c => c.ContactComponent)).pipe(
        delay(0)
      ),
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      from(import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)).pipe(delay(0)),
  },
  {
    path: 'treinadores',
    loadChildren: () =>
      from(import('./modules/trainer/trainer.module').then(c => c.TrainerModule)).pipe(delay(0)),
  },
  {
    path: '**',
    loadComponent: () =>
      from(import('./modules/not-found/not-found.component').then(c => c.NotFoundComponent)).pipe(
        delay(0)
      ),
  },
];
