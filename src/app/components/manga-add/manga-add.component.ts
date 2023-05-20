import { Component } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-add',
  templateUrl: './manga-add.component.html',
  styleUrls: ['./manga-add.component.scss']
})
export class MangaAddComponent {

  newManga: Manga = {
    title: 'Title',
    imageUrl: 'Image',
    author: ['Author'],
    target: 'Category',
    originalRun: 'Date',
    publishedBy: 'Published by',
    genre: ['Genre'],
    plot: 'Plot',
    volumes: 0,
    isComplete: false
  }

  constructor(private dataManagerServ: DataManagerService){}

  saveManga(){
    this.dataManagerServ.addManga({...this.newManga});
  }

}
