import { Directive, HostBinding, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonTypePipe } from '../pipes/pokemon-type/pokemon-type.pipe';
import { PokemonService } from '../services/pokemon.service';

@Directive({
  selector: '[appCapture]',
  standalone: true,
  providers: [PokemonTypeColorPipe, PokemonTypePipe],
})
export class CaptureDirective implements OnChanges {
  @Input('appCapture') pokemonId!: number;

  @HostBinding('class.btn-secondary')
  @HostBinding('disabled')
  isCaptured = false;

  @HostBinding('innerHTML') text = 'Capturar';

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges() {
    this.isCaptured = this.pokemonService.isCaptured(this.pokemonId);
    this.text = this.isCaptured ? 'Capturado' : 'Capturar';
  }

  @HostListener('click')
  capture() {
    this.pokemonService.getPokemon(this.pokemonId).subscribe(pokemon => {
      this.pokemonService.capture(pokemon);
    });
    this.isCaptured = true;
    this.text = 'Capturado';
  }
}
