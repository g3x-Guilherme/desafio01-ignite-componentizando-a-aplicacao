
import { GenreResponseProps } from "../services/api"
import '../styles/sidebar.scss'
import { Button } from '../components/Button'
import '../styles/global.scss'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { SideBarProps } from '../services/api'



export function SideBar({onNewGenreSelected, onSelectedGenreId}: SideBarProps) {

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
              onClick={() => onNewGenreSelected(genre.id)}
              selected={onSelectedGenreId === genre.id}
            />
          ))}
         
        </div>

      </nav>
      )
}