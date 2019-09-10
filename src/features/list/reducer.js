const listReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload]
    default:
      return state
  }
}

export default listReducer