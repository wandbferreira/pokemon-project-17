import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Observable, delay, filter, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  today = new Date();
  isLoading = true;

  private lastEndPath?: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startLoadingWithDelay(1000);
    this.stopLoading();
  }

  private startLoadingWithDelay(time: number) {
    const start = this.router.events.pipe(
      delay(time),
      filter(event => event instanceof RouteConfigLoadStart && event.route.path !== this.lastEndPath),
    );

    start.subscribe(() => {
      this.isLoading = true;
    })
  }

  private stopLoading() {
    const end = this.router.events.pipe(
      filter(event => event instanceof RouteConfigLoadEnd),
      map(event => (event as RouteConfigLoadEnd).route.path)
    );

    end.subscribe(end => {
      this.lastEndPath = end;
      this.isLoading = false;
    })
  }
}
