/* Control access to a route (guard). Can be:
- canActivate
- canActivateChild
- canDeactivate
- canLoad
- canMatch
Guards are used not only to prevent access to a route but also to prevent navigation away from it. 
A guard that controls if a route can be deactivated is a function of the CanDeactivateFn type.
*/
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isLoggedIn) { 
        return true; 
    }
    return router.parseUrl('/'); // redirects the user to the URL passed in the parameter.
};