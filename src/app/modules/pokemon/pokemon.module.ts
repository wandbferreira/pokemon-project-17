import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonEnemiesPipe } from '../../shared/pipes/pokemon-enemies/pokemon-enemies.pipe';
import { PokemonTypePipe } from '../../shared/pipes/pokemon-type/pokemon-type.pipe';
import {
  evolutionsResolver,
  isCapturedResolver,
  pokemonResolver,
  trainersResolver,
} from '../../shared/resolvers/pokemon-detail.resolver';
import { PokemonTypeColorPipe } from './../../shared/pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListFilterComponent } from './pokemon-list-filter/pokemon-list-filter.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { RandomTypeDirective } from '../../shared/directives/random-type.directive';
import { PokebolaComponent } from './pokebola/pokebola.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokebola',
    component: PokebolaComponent,
  },
  {
    path: ':id',
    component: PokemonDetailComponent,
    runGuardsAndResolvers: 'pathParamsChange',
    resolve: {
      pokemon: pokemonResolver,
      evolutions: evolutionsResolver,
      trainers: trainersResolver,
      isCaptured: isCapturedResolver,
    },
  },
];

@NgModule({
  declarations: [
    PokebolaComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonListFilterComponent,
    PokemonTypeComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PokemonTypePipe,
    PokemonTypeColorPipe,
    PokemonEnemiesPipe,
    RandomTypeDirective,
  ],
})
export class PokemonModule {}
