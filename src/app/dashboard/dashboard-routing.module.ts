import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import {Constants} from '../core/constants/constant';

@NgModule({
  imports: [RouterModule.forChild([
    { path: Constants.DASHBOARDROUTE,  component: DashboardComponent }
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
