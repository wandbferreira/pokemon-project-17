import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { LoadingService } from './shared/services/loading.service';
import { PokemonService } from './shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  today = new Date();
  isLoading = true;
  capturesCount = 0;

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private cd: ChangeDetectorRef,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getCaptures().subscribe(c => {
      this.capturesCount = c.length;
    });
    this.setLoading();
    this.startLoading();
    this.stopLoading();
  }

  private setLoading() {
    this.loadingService.isLoading().subscribe(loading => {
      this.isLoading = loading;
      this.cd.detectChanges();
    });
  }

  private startLoading() {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.loadingService.start();
    });
  }

  private stopLoading() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(() => {
        this.loadingService.stop();
      });
  }
}
