import React, { useState } from 'react';

const List = (props) => {
  const [post, setPost] = useState(props)
  return (
    <div key={post.data.id}>
        <div className="uk-card uk-card-body uk-card-hover uk-align-center uk-box-shadow-small	">
            <h3 className="uk-card-title">{post.data.title}</h3>
            <p>{post.data.body}</p>
        </div>
    </div>
  );
}

export default List;