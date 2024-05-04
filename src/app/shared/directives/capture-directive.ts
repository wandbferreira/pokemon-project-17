import { Directive, HostBinding, HostListener, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color/pokemon-type-color.pipe';
import { PokemonTypePipe } from '../pipes/pokemon-type/pokemon-type.pipe';
import { PokemonService } from '../services/pokemon.service';

@Directive({
  selector: '[appCapture]',
  standalone: true,
  providers: [PokemonTypeColorPipe, PokemonTypePipe],
})
export class CaptureDirective implements OnChanges {
  @Input('appCapture') pokemon!: Pokemon;
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
    this.router.navigate(['pokemons', 'pokebola']);
    this.isCaptured = true;
    this.text = 'Capturado';
  }
}
