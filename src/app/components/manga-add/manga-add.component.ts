import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Manga } from 'src/app/models/manga';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-add',
  templateUrl: './manga-add.component.html',
  styleUrls: ['./manga-add.component.scss']
})
export class MangaAddComponent {

  newManga: Manga = {
    title: '',
    imageUrl: '',
    author: [''],
    target: '',
    originalRun: '',
    publishedBy: '',
    genre: [''],
    plot: '',
    volumes: 0,
    isComplete: false
  }

  constructor(private dataManagerServ: DataManagerService, config: NgbModalConfig, private modalService: NgbModal){}

  saveManga(){
    this.dataManagerServ.addManga({...this.newManga});
  }

  open(content: any) {
		this.modalService.open(content);
  }

}
