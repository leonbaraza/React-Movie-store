import React, {useContext} from 'react';
import {MovieContext} from './MovieListContext'


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Movie library</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>                    
                    </ul>
                    <span className="navbar-text">
                        Number of movies: {movies.length}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;