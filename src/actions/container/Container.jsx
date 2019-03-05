import React, { Component } from 'react'
import Card from 'card'
import Add from 'add'
import Search from 'search'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import './Container.scss'


const container = ({ movieList }) => (
  <div className="container">
    <Search />
    {movieList.map(movie => <Card key={movie.id} movie={movie} />)}
    <Add />
  </div>

)

const mapStateToProps = state => ({
  movieList: state.movieList,
})

export default connect(mapStateToProps)(container)
