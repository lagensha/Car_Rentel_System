import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { LandingPage } from './landing-page/landing-page';
import { AdminSignIn } from './admin-sign-in/admin-sign-in';

export const routes: Routes = [
    {
        path: "",
        component:LandingPage
    },
    {
        path: "registration",
        component:Registration
    },
    {
        path:"admin_signIn",
        component:AdminSignIn
    }
];
