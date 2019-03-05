
const initialState = [
]


const movieList = (state = initialState, action) => {
  if (action.type === 'FETCH_MOVIES_SUCCESS') {
    return action.data
  }
  if (action.type === 'ADD_SUCCESS') { return state.concat({ ...action.data }) }
  if (action.type === 'UPDATE_SUCCESS') {
    return state.map((m) => {
      if (m.id === action.data.id) {
        return action.data;
      }
      return m
    })
  }
  if (action.type === 'DELETE_SUCCESS') {
    return state.filter((m) => {
      if (m.id === action.id) {
        return false
      }
      return true
    })
  }
  if (action.type === 'FILTER') {
    if (action.newTitle === '') {
      return initialState
    }
    return initialState.filter(e => e.title.includes(action.newTitle))
  }
  return state
}

export default movieList
