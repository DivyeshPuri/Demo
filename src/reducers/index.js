const initState = {
  posts: null,
  isFetching: false,
  clicked: false
}

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_POST':
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
        clicked: true
      })
    case 'RECEIVE_POST':
      return {
        ...state,
        isFetching: false,
        clicked: false,
        posts: action.posts
      }
    default:
      return state
  }
}