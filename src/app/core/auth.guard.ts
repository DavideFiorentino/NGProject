import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
            console.log('You are logged in');
            return true;

        }

        canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) {
                return this.canActivate(route, state);
            }
        
}