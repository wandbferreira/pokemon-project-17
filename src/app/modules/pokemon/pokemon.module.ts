import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonFilterComponent } from './components/pokemon-filter/pokemon-filter.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonPokebolaComponent } from './components/pokemon-pokebola/pokemon-pokebola.component';
import { PokemonTypeSelectorComponent } from './components/pokemon-type-selector/pokemon-type-selector.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { PokemonCaptureDirective } from './directives/pokemon-capture.directive';
import { PokemonEnemiesPipe } from './pipes/pokemon-enemies.pipe';
import { PokemonFilterPipe } from './pipes/pokemon-filter.pipe';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import {
  evolutionsResolver,
  pokemonResolver,
  pokemonsResolver,
  trainerNamesResolver,
} from './pokemon.resolver';

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
    PokemonFilterComponent,
    PokemonDetailComponent,
    PokemonPokebolaComponent,
    PokemonTypeSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PokemonTypePipe,
    PokemonTypeComponent,
    PokemonTypeColorPipe,
    PokemonEnemiesPipe,
    PokemonFilterPipe,
    PokemonCaptureDirective,
    PokemonCardComponent,
  ],
})
export class PokemonModule {}
