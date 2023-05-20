import { Component, Input } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.scss']
})
export class PlotDetailComponent {

  @Input() mangaDetail?: Manga;

  constructor(public dataManagerServ: DataManagerService){}

}
