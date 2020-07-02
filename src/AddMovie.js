import React,  {useState, useContext} from 'react';
import {MovieContext} from './MovieListContext'

const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name:name, price:price}])
    }

    return (
        <div className="container">
            <form onSubmit={addMovie}>
                <div className="form-group">
                    <label for="title">Movie Title</label>
                    <input type="text" className="form-control" id="title" value={name} onChange={updateName}/>
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input type="text" className="form-control" id="price" value={price} onChange={updatePrice} />
                </div>
                <button className="btn btn-primary">Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovie;