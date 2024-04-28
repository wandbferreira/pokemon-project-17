import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonType } from '../../../shared/models/pokemon-type';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonTypeComponent {
  @Input() type: PokemonType = 'normal';
}
