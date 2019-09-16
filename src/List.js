import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from './actions/index.js'

const List = (props) => {
  const dispatch = useDispatch()
  const post = useState(props)[0]
  return (
    <div key={post.data.id}>
        <div className="uk-card uk-card-body uk-card-hover uk-align-center uk-box-shadow-small">
            <h3 className="uk-card-title">{post.data.title}</h3>
            <p>{post.data.body}</p>
            <button className="uk-button uk-button-danger uk-align-right uk-border-pill" onClick={() => dispatch(deletePost(props.data.id))}>Delete</button>
        </div>
    </div>
  );
}

export default List;