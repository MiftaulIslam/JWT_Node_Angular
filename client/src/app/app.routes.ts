import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FakeusersComponent } from './components/fakeusers/fakeusers.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:" ", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"forgot-password", component:ForgotPasswordComponent},
    {path:"fakeusers", component:FakeusersComponent, canActivate:[AuthGuard]},
    {path:"**", component:NotfoundComponent}];
