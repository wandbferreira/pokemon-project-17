import { Directive, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output } from '@angular/core';
import { pokemonTypeInfosMock } from '../../../mocks/pokemon-type-infos.mock';
import { PokemonType } from '../models/pokemon-type';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonTypePipe } from '../pipes/pokemon-type/pokemon-type.pipe';

@Directive({
  selector: '[appRandomType]',
  standalone: true,
  providers: [PokemonTypeColorPipe, PokemonTypePipe],
})
export class RandomTypeDirective implements OnChanges {
  @Input() type!: PokemonType;
  @Output() typeChange = new EventEmitter<PokemonType>();

  @HostBinding('style.backgroundColor') background = 'red';
  @HostBinding('innerHTML') text = '';

  constructor(private pokemonTypePipe: PokemonTypePipe, private pokemonTypeColorPipe: PokemonTypeColorPipe) {}

  ngOnChanges(): void {
    this.type = this.getRandomType();
    this.background = this.pokemonTypeColorPipe.transform(this.type);
    this.text = 'Mudar para ' + this.pokemonTypePipe.transform(this.type);
  }

  private getRandomType() {
    const types: PokemonType[] = pokemonTypeInfosMock.map(t => t.type).filter(t => t !== this.type);
    return types.sort(() => Math.random() - 0.5)[0];
  }


  @HostListener('click')
  changeToType() {
    console.log('mudar para', this.type);
    this.typeChange.emit(this.type);
  }
}
