import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonCardComponent } from '../pokemon/components/pokemon-card/pokemon-card.component';
import { PokemonService } from '../pokemon/pokemon.service';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';

/** Sobreescreve o pokemon service */
@Injectable({
  providedIn: 'root',
})
class OtherPokemonService extends PokemonService {
  private teamAshIds = [1, 4, 5, 25];

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
  imports: [CommonModule, RouterModule.forChild(routes), PokemonCardComponent],
  providers: [
    {
      provide: PokemonService,
      useClass: OtherPokemonService,
    },
  ],
})
export class TrainerModule {}
