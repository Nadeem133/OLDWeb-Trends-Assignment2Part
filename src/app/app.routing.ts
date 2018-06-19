import { Routes, RouterModule } from '@angular/router';

import { HeroDetailsComponent } from "./hero-details/hero-details.component";

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    //{ path: '', redirectTo: '/hero-details', pathMatch: 'full' },
    { path: 'hero-details', component: HeroDetailsComponent }
     
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);