import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { auth } from '../../models/auth/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:5004/'; // Remove extra quotes here

  isAuthenticated(): Observable<auth> {
    return this.http.get<auth>(`${this.baseUrl}protect`, {withCredentials: true}); // Use template literals
  }

}
