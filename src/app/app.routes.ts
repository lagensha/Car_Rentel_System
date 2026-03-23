import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { LandingPage } from './landing-page/landing-page';
import { AdminSignIn } from './admin-sign-in/admin-sign-in';
import { CarCatalog } from './car-catalog/car-catalog';

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
        path:"admin-sign-in",
        component:AdminSignIn
    },
    {
        path:"car-catalog",
        component:CarCatalog
    }
];
