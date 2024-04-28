import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { pokemonTypeInfosMock } from '../../../../mocks/pokemon-type-infos.mock';
import { PokemonType } from '../../../shared/models/pokemon-type';

@Component({
  selector: 'app-pokemon-type-selector',
  templateUrl: './pokemon-type-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonTypeSelectorComponent implements OnChanges {
  @Input() type!: PokemonType;
  @Output() typeChange = new EventEmitter<PokemonType>();

  types: PokemonType[] = [];

  ngOnChanges(): void {
    this.types = this.getRandomTypes();
  }

  private getRandomTypes(): PokemonType[] {
    const types: PokemonType[] = pokemonTypeInfosMock.map(t => t.type).filter(t => t !== this.type);
    return types.sort(() => Math.random() - 0.5);
  }

  setType(type: PokemonType) {
    this.typeChange.emit(type);
  }
}
