export default (state = '', action) => {
  if (action.type === 'FILTER') return action.newTitle
  return state
}
//  searchReducer
