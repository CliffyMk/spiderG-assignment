import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* Feature Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { AlertService } from './shared/alert/alert.service';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule,
    
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
