import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:"The black list",
            price: "$100",
            id: 112424
        },
        {
            name:"Nikita",
            price: "$200",
            id: 112425
        },
        {
            name:"The Redemption",
            price: "$150",
            id: 112426
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}