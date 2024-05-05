import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonType } from '../../../shared/models/pokemon-type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Input() canCapture = true;
  @Output() pokemonChange = new EventEmitter<Pokemon>();

  setPokemonType(type: PokemonType) {
    this.pokemon!.type = type;
    this.pokemonChange.emit(this.pokemon);
  }

  toUpperCase(str: string) {
    console.log('upercase...');
    return str.toUpperCase();
  }
}
