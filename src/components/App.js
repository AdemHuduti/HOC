import React, { Component } from 'react';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeAuth } from '../actions';

class App extends Component {

  renderButton() {
    if(this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
    } else {
      return <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
    }
  };

  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  };
 
  render() {
    return (
      <div>
        <div>
          {this.renderHeader()}
          <CommentList />
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { changeAuth })(App)