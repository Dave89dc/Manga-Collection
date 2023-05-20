import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaAddComponent } from './components/manga-add/manga-add.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MangaAddComponent,
    MangaListComponent,
    MangaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
