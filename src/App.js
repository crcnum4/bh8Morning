import React, { Component } from "react";
import "./App.css";
import Post from "./components/Post";
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

  renderPosts = () => {
    // const mapFunction = (post) => {
    //   return <Post post={post} />;
    // };

    const display = this.state.posts.map((post) => {
      return <Post post={post} />;
    });
    // [<Post post=[0]/>, <Post post[1]/>, <Post post[2]/>]
    return display;
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 id="brand">Welcome to BrainHive!</h1>
          <div id="navigation">
            <a href="">Add Post</a>
          </div>
        </div>
        <div className="postList">{this.renderPosts()}</div>
        <PostForm addPost={this.addPost} />
      </div>
    );
  }
}

export default App;