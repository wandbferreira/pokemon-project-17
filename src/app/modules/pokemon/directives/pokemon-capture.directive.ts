import { Directive, HostBinding, HostListener, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { PokemonTypePipe } from '../pipes/pokemon-type.pipe';
import { PokemonService } from '../pokemon.service';

@Directive({
  selector: '[appPokemonCapture]',
  standalone: true,
  providers: [PokemonTypeColorPipe, PokemonTypePipe],
})
export class PokemonCaptureDirective implements OnChanges {
  @Input('appPokemonCapture') pokemon!: Pokemon;
  @HostBinding('class.btn-secondary') @HostBinding('disabled') isCaptured = false;
  @HostBinding('innerHTML') text = 'Capturar';

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnChanges() {
    this.isCaptured = this.pokemonService.isCaptured(this.pokemon.id);
    this.text = this.isCaptured ? 'Capturado' : 'Capturar';
  }

  @HostListener('click')
  capture() {
    this.pokemonService.capture(this.pokemon);
    this.isCaptured = true;
    this.text = 'Capturado';

    setTimeout(() => {
      this.router.navigate(['pokemons', 'pokebola']);
    }, 400);
  }
}
