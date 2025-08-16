import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveyComponent } from './pages/surveys/surveys.component';
export const appConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'survey/:id', component: SurveyComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ]
};
