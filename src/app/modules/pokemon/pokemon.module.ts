import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CaptureDirective } from '../../shared/directives/capture-directive';
import { PokemonEnemiesPipe } from '../../shared/pipes/pokemon-enemies/pokemon-enemies.pipe';
import { PokemonTypePipe } from '../../shared/pipes/pokemon-type/pokemon-type.pipe';
import {
  evolutionsResolver,
  pokemonResolver,
  trainersResolver,
} from '../../shared/resolvers/pokemon-detail.resolver';
import { PokemonTypeColorPipe } from './../../shared/pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListFilterComponent } from './pokemon-list-filter/pokemon-list-filter.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTypeSelectorComponent } from './pokemon-type-selector/pokemon-type-selector.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonCapturesComponent } from './pokemon-captures/pokemon-captures.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokebola',
    component: PokemonCapturesComponent,
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
    PokemonListComponent,
    PokemonListFilterComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonTypeComponent,
    PokemonTypeSelectorComponent,
    PokemonCapturesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PokemonTypePipe,
    PokemonTypeColorPipe,
    PokemonEnemiesPipe,
    CaptureDirective,
  ],
})
export class PokemonModule {}
