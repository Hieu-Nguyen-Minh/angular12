import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetDataComponent } from './components/get-data/get-data.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { StudentFormComponent } from './components/student-form/student-form.component';

import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentComponent },
  { path: 'student-form/:id', component: StudentFormComponent },
  // { path: 'getdata', component: GetDataComponent },
  // { path: 'postdata', component: PostDataComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
