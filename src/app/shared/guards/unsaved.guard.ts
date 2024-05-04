import { CanDeactivateFn, MaybeAsync } from '@angular/router';
import { Observable, map } from 'rxjs';

export const unsavedGuard: CanDeactivateFn<UnsavedComponent> = function (
  componente
): MaybeAsync<boolean> {
  if (componente.saved) {
    return true;
  }
  const cancel = !confirm('Quer Salvar?\n Clique em OK para salvar e CANCELAR para sair');

  if (cancel) {
    return true;
  }

  return componente.save().pipe(
    map(() => {
      return true;
    })
  );
};

export interface UnsavedComponent {
  saved: boolean;
  save(): Observable<void>;
}
