import React, { PropTypes } from 'react';

import Message from './../Message';

function MessageList({messages}){
  return (
    <div>
      {
        messages.map( msg => {
          return (
            <Message
              key = { msg.id }
              text = { msg.text }
              picture = { msg.picture }
              displayName = { msg.displayName }
              username = { msg.username }
              date = { msg.date }
              retweets = { msg.retweets }
              favorites = { msg.favorites } />
          )
        }).reverse()
      }
    </div>
  )
}

export default MessageList;
