import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auth } from '../../models/auth/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpclient:HttpClient) { }
  baseurl = "http://localhost:5004/auth/"
  register(username:string, email:string, password:string):Observable<auth>{
    return this.httpclient.post<auth>(this.baseurl+`register`, {username, email, password}, {withCredentials:true})
  }
  login(email:string, password:string):Observable<auth>{
    return this.httpclient.post<auth>(this.baseurl+`login`, {email, password}, {withCredentials:true})
  }
  logout():Observable<auth>{
    return this.httpclient.post<auth>(this.baseurl+`logout`, {}, {withCredentials:true})
  }
}
