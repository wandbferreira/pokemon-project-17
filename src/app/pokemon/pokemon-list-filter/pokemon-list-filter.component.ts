import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonType } from '../../shared/models/pokemon-type';

export interface PokemonFilter {
  name: string;
  type?: PokemonType;
}

@Component({
  selector: 'app-pokemon-list-filter',
  templateUrl: './pokemon-list-filter.component.html',
  styleUrl: './pokemon-list-filter.component.scss',
})
export class PokemonListFilterComponent {
  @Output() filterChange = new EventEmitter<PokemonFilter>();

  filter: PokemonFilter = {
    name: '',
  };

  typeName = 'Todos';

  filterByName(name: string) {
    this.filter.name = name;
    this.filterChange.emit(this.filter);
  }

  filterByType(type?: PokemonType) {
    this.filter.type = type;
    this.filterChange.emit(this.filter);

    const map = new Map<PokemonType, string>([
      ['grass', 'Terra'],
      ['fire', 'Fogo'],
      ['water', 'Água'],
      ['thunder', 'Raio'],
      ['bug', 'Inseto'],
    ]);

    if (type) {
      this.typeName = map.get(type) ?? 'Desconhecido';
    } else {
      this.typeName = 'Todos';
    }
  }
}
