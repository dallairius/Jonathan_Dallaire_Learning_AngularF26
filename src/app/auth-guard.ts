import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Guard} from './services/guard';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const canEdit = inject(Guard)

  return canEdit.guardEnabled() ? true : router.createUrlTree(['/edit:id'])
};
