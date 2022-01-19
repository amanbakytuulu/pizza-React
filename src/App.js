import React, { useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Cart, Home } from './pages';
import './App.scss';
function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
     
      <Footer />
    </div>
  );
}


export default App;
