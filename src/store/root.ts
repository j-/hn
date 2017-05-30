import { combineReducers } from 'redux';
import * as stories from './stories';

export default combineReducers({
  stories: stories.default,
});
