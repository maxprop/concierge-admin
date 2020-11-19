import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { AuthConfig, AppConfig } from '../config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
// import './components/CheckMatrix';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'event',
        loadChildren: './event/event.module#EventModule'
      },
      {
        path: 'listing',
        loadChildren: './listing/listing.module#ListingModule'
      },
      {
        path: 'agent',
        loadChildren: './agent/agent.module#AgentModule'
      },
      {
        path: 'office',
        loadChildren: './office/office.module#OfficeModule'
      },

      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'schedule',
        loadChildren: './schedule/schedule.module#ScheduleModule'
      },

      {
        path: 'feedback',
        loadChildren: './feedback/feedback.module#FeedbackModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'
      }
    ], {useHash: true})
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
      tag: 'common'
    }},
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
