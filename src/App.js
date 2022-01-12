import React from 'react'
import { Router, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Timer from './pages/Timer'
import './App.css'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import IsOffline from './components/IsOffline'

const history = createBrowserHistory();

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search)

history.listen(function (location) {
  ReactGA.pageview(window.location.pathname + window.location.search);
})


export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header>
            <Link to="/">Recetas</Link>
            <Link to="/timer" className='timerLink'>⏱️</Link>
          </header>

          <main>
            <Route exact path="/meal-pwa-app/" component={Home} />
            <Route path="/meal-pwa-app/recipe/:recipeId" component={Recipe} />
            <Route path="/meal-pwa-app/timer" component={Timer} />
          </main>
          <IsOffline></IsOffline>
        </div>
      </Router>
    );
  }
}
