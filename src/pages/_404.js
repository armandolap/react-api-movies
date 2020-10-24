import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function _404() {
    return (
        <div className="container-fluid" >
            <div className="row d-flex flex-column align-items-center mt-3">
                <h1>Error 404!</h1>
                <h2 className="mb-4">Page not found</h2>
                <Link to={"/react-api-movies"}>
                    <Button text="Back to Home" />
                </Link>
            </div>
        </div>
    )
}

export default _404
