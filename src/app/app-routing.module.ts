import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './core/components/map/map-container/map-container.component';

import { HomeComponent } from './shared/components/home/home.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login'},
  { path: 'home',
    canActivate: [AuthGuard],
    children : [
      { path: '', component: HomeComponent}
    ]
  },
  {path: 'map', component: MapComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
