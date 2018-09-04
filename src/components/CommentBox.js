import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import requireAuth from './requireAuth';

class CommentBox extends Component {
  state = {
    comment: ''
  }


  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment)
    this.setState({
      comment: ''
    })
  }

  renderButton() {
    if(this.props.auth) {
      return <button>Sign out</button>
    } else {
      return <button>Sign in</button>
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
        {this.renderHeader()}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>Comment</h4>
          <textarea onChange={this.handleChange.bind(this)} value={this.state.comment}/>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    )
  }
}


export default connect(null, actions)(requireAuth(CommentBox));