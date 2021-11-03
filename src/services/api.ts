import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
  
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface SideBarProps {
  onNewGenreSelected: (genreID: number) => void;
  onSelectedGenreId: number
}
