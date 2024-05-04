import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = function (): boolean {
  const isLogged = localStorage.getItem('userEmail');
  if (isLogged) {
    return true;
  }

  inject(Router).navigate(['login']);
  return false;
};
