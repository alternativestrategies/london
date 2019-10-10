import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import ToDo from './ToDo';
import Food from './Food';
import Contact from './Contact';
import Footer from './Footer';
import {Container} from 'react-bootstrap';
import {HashRouter, Route} from 'react-router-dom';

const App = ()  => {
  return (
    <HashRouter>
      <Container>
      <Navigation/>
        <Route exact path='/' component={Home}/>
        <Route path="/todo" component={ToDo}/>
        <Route path='/eat' component={Food}/>
        <Route path='/contact' component={Contact}/>
      </Container>
      
        <Footer/>
    </HashRouter>
  );
}

export default App;
