import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const termsGuard: CanActivateFn = function (): boolean {
  const hasConfirmed = localStorage.getItem('termsAccepted');
  if (hasConfirmed) {
    return true;
  }

  inject(Router).navigate(['termos']);
  return false;
};
