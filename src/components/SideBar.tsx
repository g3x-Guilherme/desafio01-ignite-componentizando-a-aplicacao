
import { GenreResponseProps } from "../services/api"
import '../styles/sidebar.scss'
import { Button } from '../components/Button'
import '../styles/global.scss'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

interface SideBarProps {
  OnGenreSelected: (genreID: number) => void
  selectedGenreId: number
 

}

export function SideBar({OnGenreSelected, selectedGenreId}: SideBarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data); 
    });
  }, []);

  return (
  <nav className="sidebar">

        <span>Watch<p>Me</p></span> 

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => OnGenreSelected(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
      )
}