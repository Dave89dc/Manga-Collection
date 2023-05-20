export interface Manga {
  title: string;
  imageUrl: string;
  author: string[];
  target: string;
  originalRun: string;
  publishedBy: string;
  genre: string[];
  plot: string;
  volumes: number | string;
  isComplete: boolean;
}
