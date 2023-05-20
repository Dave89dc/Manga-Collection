import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaAddComponent } from './components/manga-add/manga-add.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';
import { CollectionIfIsCompletePipe } from './pipes/collection-if-is-complete/collection-if-is-complete.pipe';
import { SeparateElementsFromArrayPipe } from './pipes/separate-elements-from-array/separate-elements-from-array.pipe';
import { PlotDetailComponent } from './components/plot-detail/plot-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MangaAddComponent,
    MangaListComponent,
    MangaDetailComponent,
    CollectionIfIsCompletePipe,
    SeparateElementsFromArrayPipe,
    PlotDetailComponent
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
