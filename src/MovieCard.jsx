import React from 'react'

export default function MovieCard({movie}) {
  return (
    <>
        <div className="movie">
              <div>
                <p>{movie.Year}</p>
              </div>
              <div>
                <img src={ movie.Poster !== 'N/a' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.title} />
              </div>
              <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
              </div>
            </div>
    </>
  )
}
