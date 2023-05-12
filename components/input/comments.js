import { useState,useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { headers } from 'next/dist/client/components/headers';

function Comments(props) {
  const [coment,setComment] = useState()
  const [showComments, setShowComments] = useState(false);
  const { eventId } = props;

  useEffect(()=>{
    if(showComments){
      fetch(`/api/comments/${eventId}`)
      .then(res=>res.json())
      .then(data=>setComment(data.data))
  

    }

  },[showComments])


  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    
    fetch(`/api/comments/${eventId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)

    }

    )
    .then((response)=>response.json())
    .then((data)=> console.log(data))


  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList item={coment}/>}
    </section>
  );
}

export default Comments;
