import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { DashboardComponent, DashboardService, DashboardRoutingModule } from './index';

import { SharedService } from '../core/services/shared.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../core/pipes/search.pipe';

@NgModule({
  imports: [BrowserModule, CoreModule, SharedModule, DashboardRoutingModule, FormsModule],
  declarations: [DashboardComponent, CreateUserComponent, SearchPipe],
  providers: [DashboardService, SharedService]
})

export class DashboardModule { }