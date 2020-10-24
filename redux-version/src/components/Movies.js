import React from 'react'
import { Link } from 'react-router-dom'
import not_found_img from '../img/not-found.jpg'

const _addDefaultSrc = (e) => {
    e.target.src = not_found_img
}

function Movies({ results }) {
    return (
        results.map(result => (
            <div className="movie col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 text-center mt-2" key={result.imdbID}>
                <Link to={`/detail/${result.imdbID}`}>
                    <div className="card">
                        <img onError={_addDefaultSrc} className="card-img-top" src={result.Poster} alt={result.Title} />
                        <div className="card-body">
                            <p className="card-text">{result.Title}</p>
                        </div>
                    </div>
                </Link>
            </div>
        ))
    )
}

export default Movies
