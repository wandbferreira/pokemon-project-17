import { TrainerService } from './../../../shared/services/trainer.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemonsMock } from '../../../../mocks/pokemons.mock';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonFilter } from '../pokemon-list-filter/pokemon-list-filter.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = pokemonsMock;
  filter: PokemonFilter = {
    name: '',
  };

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    // TODO: Mover para filter
    this.setFilterByParams();

    this.trainerService.topTrainer = 'Misty';
    console.log('[POKEMON-LIST] Melhor treinador aqui eh: ', this.trainerService.topTrainer);
  }

  private setFilterByParams() {
    this.route.queryParams.subscribe(params => {
      this.filter = {
        name: params['name']?.toLowerCase() ?? '',
        type: params['type'] ?? undefined,
      };

      this.setPokemons(this.filter);
    });
  }

  setPokemons(filter: PokemonFilter) {
    const filterByName = (p: Pokemon): boolean => {
      if (!filter.name) {
        return true;
      }
      return p.name.toLowerCase().includes(filter.name);
    };

    const filterByType = (p: Pokemon): boolean => {
      if (!filter.type) {
        return true;
      }
      return p.type.includes(filter.type);
    };

    this.pokemons = pokemonsMock.filter(filterByName).filter(filterByType);
    this.cd.detectChanges();
  }

  toUpperCase(str: string) {
    // console.log('uper');
    return str.toUpperCase();
  }
}
