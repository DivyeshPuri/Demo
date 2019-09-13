import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './actions/index';
import List from './List';

const App = () => {
  const states = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="uk-section">
      <div className="uk-container">
        <button className="uk-button uk-button-primary uk-align-center uk-border-pill" onClick={() => dispatch(getPosts())}>Get Post</button>
      </div>
      {
        states.posts ?
          <div className="uk-container uk-width-3-4 uk-align-center">
            {
              states.posts.map((data, index) => (
                <List data={data} key={index} />
              ))
            }
          </div> :
          states.clicked && <div data-uk-spinner={''} className="center uk-margin-top"></div>
      }
    </div>
  );
}

export default App;