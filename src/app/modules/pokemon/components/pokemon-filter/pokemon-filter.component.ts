import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonTypeInfosMock } from '../../../../../mocks/pokemon-type-infos.mock';
import { PokemonType } from '../../../../shared/models/pokemon-type';

export interface PokemonFilter {
  name?: string;
  type?: PokemonType;
}

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonFilterComponent implements OnInit {
  @Input() filter!: PokemonFilter;
  @Output() filterChange = new EventEmitter<PokemonFilter>();

  typeInfos = pokemonTypeInfosMock;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setFilterByParams();
  }

  private setFilterByParams() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filter = {
        name: params['name']?.toLowerCase() ?? '',
        type: params['type'] ?? undefined,
      };

      this.filterChange.emit(this.filter);
    });
  }

  filterByName(name: string) {
    this.filter.name = name;
    this.router.navigate(['pokemons'], { queryParams: this.filter });
  }

  filterByType(type?: PokemonType) {
    this.filter.type = type;
    this.router.navigate(['pokemons'], { queryParams: this.filter });
  }
}
