import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import './Search.scss'

const Search = ({ onTextChange }) => (
  <div className="search">
    <input className="bar" placeholder="Search here" type="text" onChange={(e) => { onTextChange(e.target.value) }} />
  </div>
)

const mapStateToProps = state => ({
  value: state.Search,
})
const mapDispatchToProps = dispatch => ({
  onTextChange: (Text) => {
    dispatch({
      type: 'FILTER',
      newTitle: Text,
    })
  },
})

// Search.propTypes = {
// }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
