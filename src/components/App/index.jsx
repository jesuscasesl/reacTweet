import React, { Component, PropTypes } from 'react';

import Header from './../Header';
import Main from './../Main';

import style from './app.css';

const propTypes = {
  headerText: PropTypes.string
}

class App extends Component{
  constructor(){
    super()
  }

  render(){
    const headerText = 'ReacTweet!';
    return (
        <div>
          <Header
            headerText={headerText}/>

          <Main />
        </div>
    )
  }
}

App.propTypes = propTypes;

export default App;
