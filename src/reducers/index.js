import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import addPostReducer from "./addPostReducer";

export default combineReducers({
  posts: postsReducer,
  newPost: addPostReducer,
});
