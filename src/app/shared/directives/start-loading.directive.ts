import { Directive, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Directive({
  selector: '[appStartLoading]',
  standalone: true,
})
/**
 * Inicia o loading automaticamente
 */
export class StartLoadingDirective implements OnInit {
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.start();
  }
}
