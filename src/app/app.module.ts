import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OnSalePipe } from './pipes/on-sale.pipe';
import { HighLightDirective } from './Directives/high-light.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetDataComponent } from './components/get-data/get-data.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnSalePipe,
    PageNotFoundComponent,
    AboutComponent,
    HighLightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    StudentComponent,
    DashboardComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
