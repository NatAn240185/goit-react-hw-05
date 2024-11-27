import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({movies}) => {
  const location = useLocation();

  return (
      <div>
          <ul>
        {movies.map(movie => (
            <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location} >
               <p>{movie.title}</p>     
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList;