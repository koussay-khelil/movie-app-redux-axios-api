import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Stars from 'movie/stars'
import getfromApi from 'App'
// import PropTypes from 'prop-types'
import './Add.scss'

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      rating: 0,
      image: '',
    }
  }


Popup = () => {
  this.setState({
    open: !this.state.open,
  })
}

onChange = state => (e) => {
  this.setState({
    [state]: e.target.value,
  })
}

render() {
  return (
    <div>
      <input typ="button" value="Add" onClick={this.Popup} />
      {this.state.open && (
        <div onClick={this.Popup}>
          <div onClick={e => e.stopPropagation()}>
            <div>
              <label>
              title{''}
                <input type="text" value={this.state.title} onChange={this.onChange('title')} />
              </label>
            </div>
            <div>
              <label>
                  Image{' '}
                <input
                  type="text"
                  value={this.state.image}
                  onChange={this.onChange('image')}
                />
              </label>
            </div>
            <div>
              <label>
                  Rating{' '}
                <Stars factor={this.state.rating} changer={rating => this.setState({ rating })} />
              </label>
            </div>
            <div>
              <input
                type="button"
                value="Add"
                onClick={() => {
                  this.props.onAdd(this.state);
                  this.Popup();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
}
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
const addtoapi = state => (dispatch) => {
  dispatch({
    type: 'ADD',
  })
  const url = 'http://localhost:3000/movies'
  const data = state
  axios({
    url,
    method: 'POST',
    data,
    config: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }).then(res => dispatch({ type: 'ADD_SUCCESS', data: res.data }))
    .then(res => dispatch(get()))
}

const mapDispatchToProps = dispatch => ({

  // onAdd: () => {
  //   dispatch(addtoapi())
  // },
  onAdd: (state) => {
    const cleanState = { ...state };
    delete cleanState.isModalOpen;
    dispatch(addtoapi(state));
  },
});

export default connect(null, mapDispatchToProps)(Add)
