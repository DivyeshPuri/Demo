import axios from 'axios';

export function getPosts() {
  return function (dispatch) {
    dispatch(requestPosts())
    return axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(json => {
        if (json.status === 200) {
          if (json) {
            return dispatch(receivePost(json.data))
          }
          else {
            console.log('Error in redux action')
          }
        }
      })
  }
}

export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const requestPosts = () => {
  return {
    type: 'REQUEST_POST',
    isFetching: true,
    clicked: true
  }
}

export const receivePost = (data) => {
  return {
    type: 'RECEIVE_POST',
    isFetching: false,
    posts: data,
    clicked: false
  }
}