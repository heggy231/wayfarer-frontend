import React, { Component } from 'react';
import Header from './component/Header';
import './Home.css';
import Main from './component/Main';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Hello world! we are here!
        <Header />
        <Main />
      </div>
    );
  }
}

export default Home;
