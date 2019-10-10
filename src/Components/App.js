import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import ToDo from './ToDo';
import Food from './Food';
import Contact from './Contact';
import Footer from './Footer';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';

const App = ()  => {
  return (
    <BrowserRouter basename="/london">
      <Container>
      <Navigation/>
        <Route exact path='/' component={Home}/>
        <Route path="/todo" component={ToDo}/>
        <Route path='/eat' component={Food}/>
        <Route path='/contact' component={Contact}/>
      </Container>
      
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
