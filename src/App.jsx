import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import Container from './container'
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  componentDidMount() {
    this.props.onAppMount()
  }

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}
const getfromApi = () => (dispatch) => {
  dispatch({
    type: 'FETCH_MOVIES',
  })
  axios.get('http://localhost:3000/movies')
    .then((res) => {
      console.log(res)
      dispatch({
        type: 'FETCH_MOVIES_SUCCESS',
        data: res.data,
      })
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: 'FETCH_MOVIES_ERROR',
        error: err,
      })
    })
}


const mapDispatchToProps = dispatch => ({
  onAppMount: () => {
    dispatch(getfromApi())
  },
})
const ConnectedApp = connect(null, mapDispatchToProps)(App)

export default ConnectedApp;
