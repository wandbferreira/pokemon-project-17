import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CaptureDirective } from './directives/capture-directive';
import { PokemonEnemiesPipe } from './pipes/pokemon-enemies.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import {
  evolutionsResolver,
  pokemonResolver,
  pokemonsResolver,
  trainerNamesResolver,
} from './pokemon.resolver';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonFiltersComponent } from './components/pokemon-filters/pokemon-filters.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonTypeSelectorComponent } from './components/pokemon-type-selector/pokemon-type-selector.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { PokemonPokebolaComponent } from './components/pokemon-pokebola/pokemon-pokebola.component';
import { PokemonFilterPipe } from './pipes/pokemon-filter.pipe';

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
      trainers: trainerNamesResolver,
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
