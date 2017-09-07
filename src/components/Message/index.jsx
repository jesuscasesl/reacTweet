import React from 'react';

import moment from 'moment';

import style from './message.css';

function Message({id, text, picture, displayName, username, date, retweets, favorites}){
  let dateFormat = moment(date).fromNow();
  return(
    <div className={style.root}>
      <div className={style.user}>
        <figure>
          <img className={style.avatar} src={ picture }/>
        </figure>
        <span className={style.displayName}>{ displayName }</span>
        <span className={style.username}>{ username }</span>
        <span className={style.date}>{ dateFormat }</span>
      </div>

      <h3>{ text }</h3>
      <div className={style.buttons}>
        <div
          className={style.icon}>
          <span className="fa fa-reply"></span>
        </div>
        <div
          className={style.icon}>
          <span className="fa fa-retweet"></span>
          <span className={style.num}>{ retweets }</span>
        </div>
        <div
          className={style.icon}>
          <span className="fa fa-star"></span>
          <span className={style.num}>{ favorites }</span>
        </div>
      </div>
    </div>
  )
}

export default Message;
