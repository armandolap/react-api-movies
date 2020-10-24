import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button';

function Detail({ match }) {

    const apiUrl = "https://www.omdbapi.com/?apikey=4ec44f58"
    const movieId = match.params.movieId

    const [state, setState] = useState({
        results: [],
        error: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            const responseMovie = await fetch(`${apiUrl}&i=${movieId}`)
            const results = await responseMovie.json()
            console.log(results);
            const { Error, Response } = results
            if (Response === "False") {
                setState(prevState => {
                    return { ...prevState, error: Error, results: [] }
                });
            } else {
                setState(prevState => {
                    return { ...prevState, results: results, error: "" }
                });
            }
        }
        fetchData()
    }, [movieId]);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-3 p-3 detail">
                <div className="col-8 col-sm-7 col-md-6 col-lg-4 col-xl-4 text-center mt-2">
                    <div className="card mb-3">
                        <h5 className="card-title mt-2">{state.results.Title} <span>({state.results.Year})</span></h5>
                        <img className="card-img-top" src={state.results.Poster} alt={state.results.Title} />
                        <div className="card-body">
                            <p className="card-text p-2">{state.results.Plot}</p>
                            <hr />
                            <p className="card-text p-2">Rating: {state.results.imdbRating}</p>
                        </div>
                    </div>
                    <Link to={"/react-api-movies"}>
                        <Button text="Back to Home" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Detail
