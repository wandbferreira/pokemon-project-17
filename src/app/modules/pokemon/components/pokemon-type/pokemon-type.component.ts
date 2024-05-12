import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonType } from '../../../../shared/models/pokemon-type';
import { PokemonTypePipe } from '../../pipes/pokemon-type.pipe';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PokemonTypePipe, PokemonTypeColorPipe],
})
export class PokemonTypeComponent {
  @Input() type: PokemonType = 'normal';
}
