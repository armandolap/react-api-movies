import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataApiMoviesAction } from '../redux/actions/dataApiMoviesAction'
import Search from '../components/Search'
import Movies from '../components/Movies'

function Home() {

    const [movie, setMovie] = useState('')

    const dispatch = useDispatch();
    const fetchApiMovies = () => dispatch(dataApiMoviesAction(movie))

    const data = useSelector((state) => state.data.dataMovies)
    const loading = useSelector((state) => state.data.loading)
    const err = useSelector((state) => state.data.err)

    const _handleInput = e => {
        setMovie(e.target.value)
    }

    const _handleSubmit = e => {
        e.preventDefault()
        fetchApiMovies(movie)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <Search handleInput={_handleInput} handleSubmit={_handleSubmit} />
            </div>
            <div className="error text-center">{err}</div>
            <div className="text-center">{loading ? "Loading..." : false}</div>
            <div className="row d-flex flex-wrap justify-content-center m-2">
                <Movies results={!data ? [] : data} />
            </div>
        </div>
    )
}

export default Home
