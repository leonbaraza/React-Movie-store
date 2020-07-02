import React from 'react'


const Movie = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    );
}

export default Movie;