import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Observable, delay, filter } from 'rxjs';
import { LoadingService } from './shared/services/loading.service';

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

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setLoading();
    this.startLoading();
    this.stopLoading();
  }

  private setLoading() {
    this.loadingService.isLoading().subscribe((i) => {
      this.isLoading = i;
      this.cd.detectChanges();
    });
  }

  private startLoading() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this.loadingService.start();
      });
  }

  private stopLoading() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadingService.stop();
      });
  }
}
