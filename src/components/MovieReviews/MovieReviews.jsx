import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import css from './MovieReviews.module.css';

const Reviews = () => {
    
    const { movieId } = useParams();
    const [reviewsMovie, setreviewsMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
                setIsLoading(true);
                setError(null)
            try {
                const data = await fetchMovieReviews(movieId);
                setreviewsMovie(data);                
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false);
            }

        };

        getReviews();
    }, [movieId]);

    if (reviewsMovie.length === 0) {
        return <p>There are no reviews yet</p>;
    } else {
        return (
            <div>
                <ul className={css.list}>
                    {isLoading && <p>Loading</p>}
                    {error && <p>404</p>}
                    {reviewsMovie.map(({ id, author, content }) => {
                        if (author) {
                            return (
                                <li key={id} className={css.item}>
                                    <h3>Author: {author}</h3>
                                    <p className="text"> {content}</p>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        )
    }
}

    export default Reviews;