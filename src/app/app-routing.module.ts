import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './core/constants/constant';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';
export const routes: Routes = [
  { path: '', redirectTo: Constants.DASHBOARDROUTE, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }