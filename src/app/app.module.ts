import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Packages Dependencies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

// Main Dependencies
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Routers
import { AppRoutingModule } from './app-router.module';

// App Modules
import { HomeModule } from './home/home.module';
import { ParamsModule } from './dashboard/params/params.module';
import { IndividualsModule } from './dashboard/individuals/individuals.module';
import { UsersModule } from './dashboard/users/users.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2BreadcrumbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    ParamsModule,
    IndividualsModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [BreadcrumbService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
