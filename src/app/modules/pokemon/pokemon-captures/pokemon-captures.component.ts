import { PokemonService } from '../../../shared/services/pokemon.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-captures',
  templateUrl: './pokemon-captures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCapturesComponent implements OnInit {
  pokemons$!: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getCaptures();
  }

  free() {
    this.pokemonService.freeCaptures();
  }
}
