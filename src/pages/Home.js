import React, { useState } from 'react'
import Search from '../components/Search'
import Movies from '../components/Movies'

function Home() {
    // API Movies Search (http://www.omdbapi.com)
    const apiUrl = "https://www.omdbapi.com/?apikey=4ec44f58"

    const [state, setState] = useState({
        search: "",
        results: [],
        error: ""
    })

    const _handleInput = e => {
        const s = e.target.value;
        setState(prevState => {
            return { ...prevState, search: s }
        });
    }

    const _handleSubmit = async e => {
        e.preventDefault()
        const responseMovies = await fetch(`${apiUrl}&s=${state.search}`)
        const results = await responseMovies.json()
        const { Search = [], Error, Response } = results
        if (Response === "False") {
            setState(prevState => {
                return { ...prevState, results: [], error: Error }
            });
        } else {
            setState(prevState => {
                return { ...prevState, results: Search, error: "" }
            });
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <Search handleInput={_handleInput} handleSubmit={_handleSubmit} />
            </div>
            <div className="error text-center">{state.error}</div>
            <div className="row d-flex flex-wrap justify-content-center m-2">
                <Movies results={state.results} />
            </div>
        </div>
    )
}

export default Home
