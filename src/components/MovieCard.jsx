import React from 'react';
import Rating from 'react-rating-stars-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ data }) => {
    const {id, original_title, overview, vote_average, release_date, poster_path } = data;

    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    const navigate = useNavigate();

    const handleCardClick = () => {
        console.log(id)
        navigate(`/details/${id}`);
    };

    return (
        <div className='movie_card' onClick={handleCardClick}>
            <div className="card_image">
                <LazyLoadImage
                    src={`${imgUrl}${poster_path}`}

                    effect="blur"
                />
            </div>
            <div className="card_info">
                <h3>{original_title}</h3>
            </div>

            <div className="description">
                <h3>{original_title}</h3>
                <p>{overview}</p>
                <span>{release_date}</span>
                <Rating
                    count={5}
                    size={20}
                    activeColor="yellow"
                    value={vote_average}
                />
            </div>


        </div>
    )
}

export default MovieCard