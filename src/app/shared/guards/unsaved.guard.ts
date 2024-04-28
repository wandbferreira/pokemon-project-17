import { CanDeactivateFn, MaybeAsync } from '@angular/router';
import { Observable, map } from 'rxjs';

export const unsavedGuard: CanDeactivateFn<UnsavedComponent> = function (componente): MaybeAsync<boolean> {
  if (componente.saved) {
    return true;
  }
  const cancel = !confirm('Quer Salvar?\n Clique em OK para salvar e CANCELAR para sair');

  if (cancel) {
    alert('tchau!');
    return true;
  }

  return componente.save().pipe(
    map(() => {
      console.log('foi!');
      return true;
    })
  );
};

export interface UnsavedComponent {
  saved: boolean;
  save(): Observable<void>;
}
