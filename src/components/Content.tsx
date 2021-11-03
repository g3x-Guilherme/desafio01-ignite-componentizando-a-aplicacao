
import { MovieCard } from '../components/MovieCard';
import { useGenres } from '../hooks/useContext';


import '../styles/global.scss';

import '../styles/content.scss';

export function Content() {
  const {  movies, selectedGenre,} = useGenres()
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     
     {console.log('tranquilo')}
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}