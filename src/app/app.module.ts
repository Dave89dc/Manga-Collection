import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';
import { CollectionIfIsCompletePipe } from './pipes/collection-if-is-complete/collection-if-is-complete.pipe';
import { SeparateElementsFromArrayPipe } from './pipes/separate-elements-from-array/separate-elements-from-array.pipe';
import { MangaAddComponent } from './components/manga-add/manga-add.component';
import { ReturnValuePipe } from './pipes/return-value/return-value.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MangaListComponent,
    MangaDetailComponent,
    CollectionIfIsCompletePipe,
    SeparateElementsFromArrayPipe,
    MangaAddComponent,
    ReturnValuePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbPaginationModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
