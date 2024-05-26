import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { auth } from '../models/auth/auth.module';
import { AuthorizationService } from '../services/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().pipe(
      map((authData: auth) => {
        if (authData.auth) {
          return true; // User is authenticated
        } else {
          this.router.navigate(['/login']); // Redirect to login if not authenticated
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/login']); // Handle errors, redirect to login
        return of(false);
      })
    );
  }

}
