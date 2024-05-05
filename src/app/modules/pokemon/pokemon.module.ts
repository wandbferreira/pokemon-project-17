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
  pokemonsResolver,
  trainersResolver,
} from '../../shared/resolvers/pokemon.resolver';
import { PokemonTypeColorPipe } from './../../shared/pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonFiltersComponent } from './pokemon-filters/pokemon-filters.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTypeSelectorComponent } from './pokemon-type-selector/pokemon-type-selector.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonPokebolaComponent } from './pokemon-pokebola/pokemon-pokebola.component';
import { PokemonFilterPipe } from '../../shared/pipes/pokemon-filter/pokemon-filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: {
      pokemons: pokemonsResolver,
    },
  },
  {
    path: 'pokebola',
    component: PokemonPokebolaComponent,
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
    PokemonFiltersComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonTypeComponent,
    PokemonTypeSelectorComponent,
    PokemonPokebolaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PokemonTypePipe,
    PokemonTypeColorPipe,
    PokemonEnemiesPipe,
    PokemonFilterPipe,
    CaptureDirective,
  ],
})
export class PokemonModule {}
