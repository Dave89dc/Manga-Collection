import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Manga } from 'src/app/models/manga';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.scss'],
  styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	]
})
export class MangaDetailComponent {

  @Input() mangaDetail?: Manga;

  constructor(private dataManagerServ: DataManagerService, config: NgbModalConfig, private modalService: NgbModal){
    }

  deleteManga(){
    if(this.mangaDetail){
      this.dataManagerServ.deleteManga(this.mangaDetail);
      console.log(this.mangaDetail);
    }
    this.modalService.dismissAll();
  }

  open(content: any) {
		this.modalService.open(content);
  }

}

