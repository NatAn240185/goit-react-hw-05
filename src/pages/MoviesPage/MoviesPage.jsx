import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from '../../services/api';
import SearchMovie from '../../components/SearchMovie/SearchMovie'
import MovieList from '../../components/MovieList/MovieList';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChangeQuery = newQuery => {
    setSearchParams({query: newQuery})
  }

  const searchQuery = searchParams.get("query")

  useEffect(() => { 
    if (!searchQuery) return
    const getDeta = async () => {
      setIsLoading(true)
      setError(null)
          try {
            const data = await fetchSearch(searchQuery);
            setMovies(data.results)            
          } catch (error) {
          setError(error)
        } finally {
          setIsLoading(false);
        }
        };

        getDeta();
    }, [searchQuery]);

  return (
    <div>
        {isLoading && <p>Loading</p>}
        {error && <p>404</p>}
      <SearchMovie handleChangeQuery={handleChangeQuery} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  )
}

export default MoviesPage