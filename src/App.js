import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import posts from "./mock/posts";

import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    posts: [...posts],
  };

  addPost = (postData) => {
    console.log("hello", postData);
    this.setState({
      posts: [...this.state.posts, postData],
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <PostList posts={this.state.posts} />
            </Route>
            <Route path="/add" exact>
              <PostForm addPost={this.addPost} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
