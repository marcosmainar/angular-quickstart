import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

const routes : Routes = [
      {
        path: '',
       //redirectTo: '/dashboard',
        redirectTo: 'contact',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
        // loadChildren: 'app/hero/hero.module#HeroModule'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
      //,
      //{ path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}