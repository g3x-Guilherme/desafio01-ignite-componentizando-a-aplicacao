
import { GenreResponseProps } from "../services/api"
import '../styles/sidebar.scss'
import { Button } from '../components/Button'
import '../styles/global.scss'











export function SideBar(props: {genres: GenreResponseProps[], onGenreSelected: (genreID: number) => void, selectedGenreId: number}) {
  
  return (
  <nav className="sidebar">

        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.onGenreSelected(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
      )
}