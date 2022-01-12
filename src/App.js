import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Timer from './pages/Timer'
import './App.css'


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Recetas</Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
            {
              !window.navigator.onLine &&
              <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <span
                  style={{ background: '#bababa', padding: '10px', margin: '10px', borderRadius: 10, color: 'white', fontWeight: 700 }}
                >No tienes conexión a internet</span>
              </div>
            }
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
