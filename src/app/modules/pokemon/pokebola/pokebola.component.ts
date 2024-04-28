import { PokemonService } from '../../../shared/services/pokemon.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokebolaComponent implements OnInit {
  pokemons$!: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getCaptures();
  }

  free() {
    this.pokemonService.freeCaptures();
  }
}
