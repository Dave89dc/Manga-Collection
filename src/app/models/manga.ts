export interface Manga {
  title: string;
  imageUrl: string;
  author: string[] | string;
  target: string;
  originalRun: string;
  publishedBy: string;
  genre: string[] | string;
  plot: string;
  volumes: number | string;
  isComplete: boolean;
}
