import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { auth } from '../../models/auth/auth.module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-fakeusers',
  templateUrl: './fakeusers.component.html',
  styleUrls: ['./fakeusers.component.css']
})
export class FakeusersComponent implements OnInit {


  constructor(
    private AuthenticationService:AuthenticationService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorizationService.isAuthenticated().subscribe(
      (data: auth) => {
        if(!data.auth)this.router.navigate(['/login']);
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }
  logOut() {
    this.AuthenticationService.logout().subscribe(
      (data: auth) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    )
    }
}
