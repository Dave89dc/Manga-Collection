import { Component } from '@angular/core';

import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent {

  constructor(public dataManagerServ: DataManagerService){

  }

}
