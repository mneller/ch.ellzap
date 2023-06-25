import {Route} from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const appRoutes: Route[] = [
    {path: 'home', component: HomeComponent},
    {
        path: 'impressum',
        loadComponent: () =>
            import('ellzap-libs/impressum').then((m) => m.EllzapLibsImpressumComponent),
    }
];
