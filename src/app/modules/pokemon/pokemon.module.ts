import { PokemonEvolutionsPipe } from './../../shared/pipes/pokemon-evolutions.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonListFilterComponent } from './pokemon-list-filter/pokemon-list-filter.component';
import { PokemonTypePipe } from '../../shared/pipes/pokemon-type/pokemon-type.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: ':id',
    component: PokemonDetailComponent,
  },
];

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonListFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PokemonTypePipe,
    PokemonEvolutionsPipe,
  ],
})
export class PokemonModule {}
