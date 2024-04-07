import { AnimationTriggerMetadata, animate, animation, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { delay, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  today = new Date();
  isLoading = true;

  private loadedPath?: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startLoadingWithDelay(400);
    this.stopLoading();
  }

  private startLoadingWithDelay(time: number) {
    const loading = this.router.events.pipe(
      delay(time),
      filter(event => event instanceof RouteConfigLoadStart && event.route.path !== this.loadedPath),
    );

    loading.subscribe(() => {
      this.isLoading = true;
    })
  }

  private stopLoading() {
    const loaded = this.router.events.pipe(
      filter(event => event instanceof RouteConfigLoadEnd),
      map(event => (event as RouteConfigLoadEnd).route.path)
    );

    loaded.subscribe(end => {
      this.loadedPath = end;
      this.isLoading = false;
    })
  }
}
