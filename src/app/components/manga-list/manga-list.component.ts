import { Component } from '@angular/core';
import { Manga } from 'src/app/models/manga';

import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent {

  page = 1;
  itemsPerPage = 10;
  generi: string[] = [];
  categorie: string[] = [];
  autori: string[] = [];
  genereSelezionato: string = '';
  categoriaSelezionata: string = '';
  autoreSelezionato: string = '';
  mangaVisualizzati: Manga[] = [];

  constructor(public dataManagerServ: DataManagerService) {
    this.generi = this.getUniqueGenres();
    this.categorie = this.getUniqueCategories();
    this.autori = this.getUniqueAuthors();
    this.mangaVisualizzati = this.dataManagerServ.mangas;
  }

  getUniqueGenres(): string[] {
    const genresSet = new Set<string>();
    for (const manga of this.dataManagerServ.mangas) {
      if (Array.isArray(manga.genre)) {
        manga.genre.forEach((genre) => genresSet.add(genre));
      } else {
        genresSet.add(manga.genre);
      }
    }
    return Array.from(genresSet);
  }

  getUniqueCategories(): string[] {
    const categoriesSet = new Set<string>();
    for (const manga of this.dataManagerServ.mangas) {
      if (Array.isArray(manga.target)) {
        manga.target.forEach((target) => categoriesSet.add(target));
      } else {
        categoriesSet.add(manga.target);
      }
    }
    return Array.from(categoriesSet);
  }

  getUniqueAuthors(): string[] {
    const authorsSet = new Set<string>();
    for (const manga of this.dataManagerServ.mangas) {
      if (Array.isArray(manga.author)) {
        manga.author.forEach((author) => authorsSet.add(author));
      } else {
        authorsSet.add(manga.author);
      }
    }
    return Array.from(authorsSet);
  }

  filtra() {
    this.mangaVisualizzati = this.dataManagerServ.mangas.filter(manga => {
      const genereSelezionato = this.genereSelezionato;
      const categoriaSelezionata = this.categoriaSelezionata;
      const autoreSelezionato = this.autoreSelezionato;

      const genereMatch = genereSelezionato === '' || (Array.isArray(manga.genre) && manga.genre.includes(genereSelezionato)) || manga.genre === genereSelezionato;
      const categoriaMatch = categoriaSelezionata === '' || manga.target === categoriaSelezionata;
      const autoreMatch = autoreSelezionato === '' || (Array.isArray(manga.author) && manga.author.includes(autoreSelezionato)) || manga.author === autoreSelezionato;
      return genereMatch && categoriaMatch && autoreMatch;
    });

    this.page = 1;
  }


}
