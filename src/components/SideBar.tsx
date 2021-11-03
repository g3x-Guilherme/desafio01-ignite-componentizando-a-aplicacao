
import { useGenres } from "../hooks/useContext"
import { api } from '../services/api'
import { Button } from '../components/Button'
import '../styles/sidebar.scss'
import '../styles/global.scss'



export function SideBar() {
  const { genres, selectedGenreId, handleClickButton } = useGenres()

  console.log('suave')
  
  return (
  <nav className="sidebar">

        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
      )
}