import React, {useState, useContext} from 'react';
import Movie from './Movie'
import {MovieContext} from './MovieListContext'


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="container mt-3">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <Movie name={movie.name} price={movie.price} key={movie.id} id={movie.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieList;