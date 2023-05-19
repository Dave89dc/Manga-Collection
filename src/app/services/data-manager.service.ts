import { Injectable } from '@angular/core';
import { Manga } from '../models/manga';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  manga: Manga[];

  constructor() {
    this.manga = [
      {
        title: '',
        imageUrl: '',
        author: '',
        originalRun: '',
        publishedBy: '',
        genre: '',
        plot: '',
        volumes: 0,
        isComplete: false
      },
    ]

  }
}
