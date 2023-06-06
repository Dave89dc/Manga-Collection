import { Component, Input, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga';

import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss'],
})
export class MangaListComponent implements OnInit {
  page = 1;
  itemsPerPage = 10;
  generi: string[] = [];
  categorie: string[] = [];
  autori: string[] = [];
  genereSelezionato: string = '';
  categoriaSelezionata: string = '';
  autoreSelezionato: string = '';
  mangaVisualizzati: Manga[] = [];
  allMangas: Manga[] = [];

  constructor(public dataManagerServ: DataManagerService) {}

  ngOnInit() {
    this.dataManagerServ.mangaSubject.subscribe({
      next: (mangas) => {
        this.allMangas = mangas;
        this.mangaVisualizzati = mangas;
        this.generi = this.getUniqueGenres();
        this.categorie = this.getUniqueCategories();
        this.autori = this.getUniqueAuthors();
      },
    });
  }

  getUniqueGenres(): string[] {
    const genresSet = new Set<string>();
    for (const manga of this.allMangas) {
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
    for (const manga of this.allMangas) {
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
    for (const manga of this.allMangas) {
      if (Array.isArray(manga.author)) {
        manga.author.forEach((author) => authorsSet.add(author));
      } else {
        authorsSet.add(manga.author);
      }
    }
    return Array.from(authorsSet);
  }

  filtra() {
    this.mangaVisualizzati = this.allMangas.filter((manga) => {
      const genereSelezionato = this.genereSelezionato;
      const categoriaSelezionata = this.categoriaSelezionata;
      const autoreSelezionato = this.autoreSelezionato;

      const genereMatch =
        genereSelezionato === '' ||
        (Array.isArray(manga.genre) &&
          manga.genre.includes(genereSelezionato)) ||
        manga.genre === genereSelezionato;
      const categoriaMatch =
        categoriaSelezionata === '' || manga.target === categoriaSelezionata;
      const autoreMatch =
        autoreSelezionato === '' ||
        (Array.isArray(manga.author) &&
          manga.author.includes(autoreSelezionato)) ||
        manga.author === autoreSelezionato;
      return genereMatch && categoriaMatch && autoreMatch;
    });

    this.page = 1;
  }
}
