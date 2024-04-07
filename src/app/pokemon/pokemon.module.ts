import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonListFilterComponent } from './pokemon-list-filter/pokemon-list-filter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: PokemonListComponent,
  },
];

@NgModule({
  declarations: [PokemonListComponent, PokemonListFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class PokemonsModule {}
