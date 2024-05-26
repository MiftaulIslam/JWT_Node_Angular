import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { ErrorhandlerService } from '../../services/error/errorhandler.service';
import { auth } from '../../models/auth/auth.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private AuthenticationService:AuthenticationService, private ErrorhandlerService:ErrorhandlerService, private router:Router) {}

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ]);
    password: FormControl = new FormControl('', [
    Validators.required,
    Validators.min(8),
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) 
  ]);

  login:FormGroup = new FormGroup({
    email:this.email,
    password:this.password
  })

  onSubmit() {
    this.AuthenticationService.login(this.email.value, this.password.value).subscribe(
      (data:auth)=>{
        console.log(data)
        this.router.navigate(['/fakeusers'])
      },(error)=>{
        console.log(this.ErrorhandlerService.showerror(error))
      }
    )
  }
}
