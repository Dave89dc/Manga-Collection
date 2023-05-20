import { Component, Input } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.scss']
})
export class MangaDetailComponent {

  @Input() mangaDetail?: Manga;

  constructor(private dataManagerServ: DataManagerService){}

  deleteManga(){
    if(this.mangaDetail){
      this.dataManagerServ.deleteManga(this.mangaDetail);
    }
  }

}
