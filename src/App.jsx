import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "../src/pages/HomePage/HomePage";
import Navigation from "../src/components/Navigation/Navigation";
import NotFoundPage from "../src/pages/NotFound/NotFound";
const MoviesPage = lazy(() => import("../src/pages/MoviesPage/MoviesPage"));
const MovieCast = lazy(() => import("../src/components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../src/components/MovieReviews/MovieReviews"));
const MovieDetailsPage = lazy(() =>
  import("../src/pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;