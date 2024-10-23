import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"services",component:ServicesComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"signup",component:SignupComponent},
    {path:"services",component:ServicesComponent},
    {path:"login",component:LoginComponent}

];
