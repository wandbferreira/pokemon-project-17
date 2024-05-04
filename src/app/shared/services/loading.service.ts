import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(true);

  constructor() {}

  start() {
    this.loading.next(true);
  }

  stop() {
    this.loading.next(false);
  }

  isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
