import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet
} from '@angular/router';
import { filter } from 'rxjs';
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
  votes = 0;

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setLoading();
    this.startLoading();
    this.stopLoading();

    setTimeout(() => {
      this.today = new Date();
    }, 3000);


    setTimeout(() => {
      this.today = new Date();
    }, 6000);
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
