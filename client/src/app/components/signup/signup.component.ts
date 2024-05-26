import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { auth } from '../../models/auth/auth.module';
import { ErrorhandlerService } from '../../services/error/errorhandler.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FormsModule, CommonModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private AuthenticationService:AuthenticationService, private ErrorhandlerService:ErrorhandlerService){}
err!:string;
  onSubmit(form:NgForm){
    this.AuthenticationService.register(form.value.username, form.value.email, form.value.password).subscribe(
      (data:auth)=>{
        console.log(data)
      },
      (error)=>{
        console.log(this.ErrorhandlerService.showerror(error)) 
      }
    )
  }

}
