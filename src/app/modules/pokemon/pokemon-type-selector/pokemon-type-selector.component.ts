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
    this.types = this.getOtherTypes(this.type);
  }

  private getOtherTypes(type: PokemonType): PokemonType[] {
    return pokemonTypeInfosMock.map(t => t.type).filter(t => t !== type);
  }

  setType(type: PokemonType) {
    this.typeChange.emit(type);
  }
}
