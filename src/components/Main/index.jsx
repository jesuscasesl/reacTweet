import React, { Component } from 'react';

import uuid from 'uuid';

import MessageList from './../MessageList';

class Main extends Component{
  constructor(){
    super()
    this.state = {
      user: [
        {
          id: uuid.v4(),
          text: 'Mensaje de prueba 1',
          picture: 'http://openplus.ca/images/photo.jpg',
          displayName: 'Jesus Castillo Eslava',
          username: 'jesuscasesl',
          date: Date.now(),
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text: 'Mensaje de prueba 2',
          picture: 'http://openplus.ca/images/photo.jpg',
          displayName: 'Jesus Castillo Eslava',
          username: 'jesuscasesl',
          date: Date.now(),
          retweets: 0,
          favorites: 0
        }
      ]
    }

  }

  render(){
    return(
      <div>
        <MessageList messages = { this.state.user } />
      </div>
    )
  }
}

export default Main;
