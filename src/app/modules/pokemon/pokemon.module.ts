import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonEvolutionsPipe } from '../../shared/pipes/pokemon-evolutions/pokemon-evolutions.pipe';
import { PokemonTypePipe } from '../../shared/pipes/pokemon-type/pokemon-type.pipe';
import {
  evolutionsResolver,
  pokemonResolver,
  trainersResolver,
} from '../../shared/resolvers/pokemon-detail.resolver';
import { PokemonTypeColorPipe } from './../../shared/pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListFilterComponent } from './pokemon-list-filter/pokemon-list-filter.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: ':id',
    component: PokemonDetailComponent,
    runGuardsAndResolvers: 'pathParamsChange',
    resolve: {
      pokemon: pokemonResolver,
      evolutions: evolutionsResolver,
      trainers: trainersResolver,
    },
  },
];

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonListFilterComponent,
    PokemonTypeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PokemonTypePipe,
    PokemonEvolutionsPipe,
    PokemonTypeColorPipe,
  ],
})
export class PokemonModule {}
