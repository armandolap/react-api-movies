import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataApiDetailAction } from '../redux/actions/dataApiDetailAction'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Detail({ match }) {

    const movieId = match.params.movieId

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.dataDetail)
    const loading = useSelector((state) => state.data.loading)
    const err = useSelector((state) => state.data.err)

    useEffect(() => {
        dispatch(dataApiDetailAction(movieId))
    }, [movieId, dispatch]);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-3 p-3 detail">
                <div className="col-8 col-sm-7 col-md-6 col-lg-4 col-xl-4 text-center mt-2">
                    <div className="text-center">{loading ? "Loading..." : false}</div>
                    {!err ?
                        <React.Fragment>
                            <div className="error text-center">{err}</div>
                            <div className="card mb-3">
                                <h5 className="card-title mt-2">{data.Title} <span>({data.Year})</span></h5>
                                <img className="card-img-top" src={data.Poster} alt={data.Title} />
                                <div className="card-body">
                                    <p className="card-text p-2">{data.Plot}</p>
                                    <hr />
                                    <p className="card-text p-2">Rating: {data.imdbRating}</p>
                                </div>
                            </div>

                        </React.Fragment>
                        : <div className="error text-center">{err}</div>}
                    <Link to={"/react-api-movies"}>
                        <Button text="Back to Home" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Detail
