export default (state = '', action) => {
  console.log('fuck', action)
  if (action.type === 'FILTER') return action.newTitle
  return state
}
//  searchReducer
