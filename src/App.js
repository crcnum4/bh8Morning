import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import ViewPost from "./components/ViewPost";
import INITIAL_POSTS from "./mock/posts";

import PostForm from "./components/PostForm";

class App extends Component {
  //"global" state without redux
  state = {
    posts: [...INITIAL_POSTS],
    selected: 1,
  };

  addPost = (postData) => {
    postData.id = this.state.posts[this.state.posts.length - 1].id + 1;
    console.log("hello", postData);
    this.setState({
      ...this.state,
      posts: [...this.state.posts, postData],
    });
  };

  handleSelect = (id) => {
    console.log("clicked", id);
    this.setState({
      ...this.state,
      selected: id,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <PostList
                // posts={this.state.posts}
                handleSelect={this.handleSelect}
              />
            </Route>
            <Route path="/add" exact>
              <PostForm addPost={this.addPost} />
            </Route>
            <Route path="/post/:postId">
              {/* <ViewPost post={this.state.posts[this.state.selected - 1]} /> */}
              <ViewPost post={this.state.posts} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
