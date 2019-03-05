import React from 'react'
import PropTypes from 'prop-types'
import './Stars.scss'

const Stars = ({ factor, changer }) => {
  const rate = []
  for (let i = 0; i < 5; i += 1) {
    // I couldn't remove onclick it without hurting the number of stars
    if (i < factor) { rate.push(<div onClick={() => changer(i + 1)} key={i * 100}>★</div>) } else { rate.push(<div onClick={() => changer(i + 1)} key={i * 100}>☆</div>) }
  }
  return <div className="rates">{rate}</div>
}


Stars.propTypes = {
  factor: PropTypes.string.isRequired,
  changer: PropTypes.func,
}
Stars.defaultProps = {
  changer: () => {},
}

export default Stars
