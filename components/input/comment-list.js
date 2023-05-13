import { useRouter } from 'next/router';
import classes from './comment-list.module.css';
import { useEffect, useState } from 'react';
function CommentList({item}) {
  return (
    <ul className={classes.comments}>
      {item &&item.map(item=><li>{item.text}<div>By <address>{item.name}</address></div></li>)}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
