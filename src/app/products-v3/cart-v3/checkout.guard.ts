/* Control access to a route (guard). 
Guards are used not only to prevent access to a route but also to prevent navigation away from it. 
A guard that controls if a route can be deactivated is a function of the CanDeactivateFn type.
*/
import { CanDeactivateFn } from '@angular/router';
import { CartV3Component } from './cart-v3.component';

export const checkoutGuard: CanDeactivateFn<CartV3Component> = () => {
    const confirmation = confirm('You have pending items in your cart. Do you want to continue?');
    return confirmation;
};
