import React, { useEffect, useRef } from 'react'

function Search({ handleInput, handleSubmit }) {

    const inputRef = useRef(null);

    useEffect(() => { inputRef.current.focus(); });

    return (
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 text-center mt-3">
            <h1>Search Movies</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text" className="form-control"
                        placeholder="Add movie"
                        aria-label="Add movie"
                        aria-describedby="basic-addon2"
                        onChange={handleInput}
                        ref={inputRef}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
