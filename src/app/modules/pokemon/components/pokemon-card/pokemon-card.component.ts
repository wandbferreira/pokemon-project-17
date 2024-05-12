import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pokemon } from '../../../../shared/models/pokemon';
import { PokemonType } from '../../../../shared/models/pokemon-type';
import { PokemonCaptureDirective } from '../../directives/pokemon-capture.directive';
import { PokemonTypeComponent } from '../pokemon-type/pokemon-type.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  standalone: true,
  imports: [RouterModule, CommonModule, PokemonCaptureDirective, PokemonTypeComponent],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() pokemonChange = new EventEmitter<Pokemon>();

  setPokemonType(type: PokemonType) {
    this.pokemon!.type = type;
    this.pokemonChange.emit(this.pokemon);
  }
}
