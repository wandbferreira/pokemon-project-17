import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemonsMock } from '../../../../mocks/pokemons.mock';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  evolutions: Pokemon[] = [];
  trainers: string[] = [];
  enemies = pokemonsMock;
  isCaptured = false;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.pokemon = data['pokemon'];
      this.evolutions = data['evolutions'];
      this.trainers = data['trainers'];
      this.isCaptured = data['isCaptured'];
    });
  }

  capture(pokemon: Pokemon) {
    this.pokemonService.capture(pokemon);
    this.isCaptured = true;
  }
}
