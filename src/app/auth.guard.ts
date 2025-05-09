import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)
  if(localStorage.getItem('currentUser') !== null){
    return true;
  }else{
    _Router.navigate(['/signin'])
    return false;
  }

};
  