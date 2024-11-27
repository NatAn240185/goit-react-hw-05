import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));

const App = () => {
  return (
      <div>
      <Navigation />
      <Suspense fallback={ <h2>Loading by suspense</h2> } >
                  <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />}/>
        </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </div>
  )
}


export default App;