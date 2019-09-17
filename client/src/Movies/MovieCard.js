import React from 'react';
import { Link } from 'react-router-dom'

  const MovieCard = props => {
  const { title, director, metascore, stars, id} = props.movie;
  
  return (
    <div className='movie-card'>
      <Link className='title-Link' to={`movies/${props.movie.id}`}>
       <h2>{title}</h2>
     </Link>
     <div className="movie-director">
       Director: <em>{director}</em>
     </div>
     <div className="movie-metascore">
       <h3>Metascore: <strong>{metascore}</strong></h3>
     </div>
     <h3>Actors</h3>
       {stars.map(star => (
       <div key={star} className="movie-star">
         {star}
       </div>
     ))}
    </div>
  )
};

export default MovieCard;
