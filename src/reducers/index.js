import { combineReducers } from 'redux';
import CommentRedcers from './comment';
import authReducer from './auth';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  comments: CommentRedcers,
  auth:authReducer
});

export default rootReducer;