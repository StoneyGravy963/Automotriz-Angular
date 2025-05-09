import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AutosComponent } from './autos/autos.component';
import { LoginComponent } from './login/login.component';
import { UnAutoComponent } from './un-auto/un-auto.component';
import { BusquedaAutosComponent } from './busqueda-autos/busqueda-autos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'autos', component: AutosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'auto/:id', component: UnAutoComponent },
    // { path: '**', redirectTo: 'home' },
    { path: 'busqueda', component: BusquedaAutosComponent },
    { path: '', redirectTo: '/busqueda', pathMatch: 'full' },


];
