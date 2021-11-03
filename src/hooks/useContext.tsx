import { useContext, createContext, ReactNode, useState, useEffect } from "react"
import { api } from '../services/api'


interface GenresProviderProps {
  children: ReactNode
}

interface GenresContextData {
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreId: number
  movies: MovieProps[]
  selectedGenre: GenreResponseProps
}

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


const GenresContext = createContext<GenresContextData>({} as GenresContextData);

export function GenresProvider({children}: GenresProviderProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = 
  useState<GenreResponseProps>({} as GenreResponseProps);
  

    try {
      useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
          setGenres(response.data);
        });
      }, []);
    
      useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
          setMovies(response.data);
        });
       
    
        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
          setSelectedGenre(response.data);
        })
      }, [selectedGenreId]);
    }
    catch (err) {
      console.log('err')
    }
  
  

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
 




  return (
    <GenresContext.Provider value={{selectedGenreId, handleClickButton, movies, selectedGenre, genres}}>
      {children}
    </GenresContext.Provider>
  )
}
export function useGenres() {
  const context = useContext(GenresContext)

  return context
}