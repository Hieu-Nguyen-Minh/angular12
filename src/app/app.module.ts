import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OnSalePipe } from './pipes/on-sale.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HighLightDirective } from './Directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnSalePipe,
    PageNotFoundComponent,
    AboutComponent,
    HighLightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
