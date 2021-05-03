import React from 'react';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';

import './MoviesCards.css';


const MoviesCards = ({moviesList, removeMovie}) => {
    return (
        <section>        
        <div className="grid-list">
        {moviesList.map((singleMovie)=>  {
        return(
            <SingleMovieCard singleMovie={singleMovie}
                             key={singleMovie.id}
                             removeMovie={removeMovie} />
        )
        })}

        </div>
        </section>
        
    )
}


export default MoviesCards;