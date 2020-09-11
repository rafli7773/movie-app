import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Nav from './Nav';
import Movie from './Movie';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <h1>Home</h1>
)

const About = () => (
  <h1>About</h1>
)

export default App;
