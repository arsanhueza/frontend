import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieItemComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
