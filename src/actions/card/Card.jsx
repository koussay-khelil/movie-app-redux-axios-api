import React from 'react'
import Stars from 'movie/stars'
import axios from 'axios'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({
  movie = {},
  updateMovie,
  deleteMovie,
}) => (
  <div className="card" onDoubleClick={() => updateMovie(movie)}>

    <div
      className="header"
      style={{
        backgroundImage: `url(${movie.image})`,
      }}
    >
      <div className="delete" onClick={() => deleteMovie(movie.id)}>X</div>
      <div className="rate"> <Stars factor={movie.rating} /></div>

      <div className="title">{movie.title}</div>
    </div>
  </div>
)
const get = () => (dispatch) => {
  axios.get('http://localhost:3000/movies')
    .then((res) => {
      console.log(res)
      dispatch({
        type: 'FETCH_MOVIES_SUCCESS',
        data: res.data,
      })
    })
}
const deleteformapi = id => (dispatch) => {
  dispatch({
    type: 'DELETE',
  })
  const url = `${'http://localhost:3000/movies' + '/'}${id}`
  axios.delete(url).then(res => dispatch({ type: 'DELETE_SUCCESS', id })).then(res => dispatch(get()))
}
const updateapi = movie => (dispatch) => {
  dispatch({
    type: 'UPDATE',
  })
  const url = `${'http://localhost:3000/movies' + '/'}${movie.id}`

  const data = {
    id: movie.id,
    title: prompt('Title', movie.title),
    image: prompt('Image', movie.image),
    rating: prompt('Rating', movie.rating),
  }
  axios
    .put(
      url,
      data,
      { headers: { 'Content-Type': 'application/json' } },
    ).then(res => dispatch({ type: 'UPDATE_SUCCESS', data: res.data }))
    .then(res => dispatch(get()))
}

// Card.propTypes = {
// }
const mapDispatchToProps = dispatch => ({
  deleteMovie: (id) => {
    dispatch(deleteformapi(id))
  },
  updateMovie: (movie) => {
    dispatch(updateapi(movie))
  },
})
export default connect(null, mapDispatchToProps)(Card)
