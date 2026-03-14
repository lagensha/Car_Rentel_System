import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
    {
        path: "",
        component:LandingPage
    },
    {
        path: "registration",
        component:Registration
    }
];
