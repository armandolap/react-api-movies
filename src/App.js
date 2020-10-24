import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import _404 from './pages/_404'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/react-api-movies' component={Home} />
                <Route path='/detail/:movieId' component={Detail} />
                <Route component={_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
