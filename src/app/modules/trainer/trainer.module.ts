import { PokemonService } from '../../shared/services/pokemon.service';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { Route, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../../shared/models/pokemon';

/** Sobre escreve o pokemon service */
@Injectable({
  providedIn: 'root',
})
class OtherPokemonService extends PokemonService {
  private teamAshIds = [1, 2, 4, 9];

  override getPokemons(): Observable<Pokemon[]> {
    return of(pokemonsMock.filter(p => this.teamAshIds.includes(p.id)));
  }
}

const routes: Route[] = [
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: TrainerDetailComponent,
  },
];

@NgModule({
  declarations: [TrainerDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: PokemonService,
      useClass: OtherPokemonService,
    },
  ],
})
export class TrainerModule {}
