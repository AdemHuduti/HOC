import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

const url = 'http://jsonplaceholder.typicode.com/comments';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export function fetchComments() {  
  const request = axios.get(url);
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
};

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};