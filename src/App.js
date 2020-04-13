import React, { Component } from "react";
import "./App.css";
import Post from "./components/Post";
import posts from "./mock/posts";

class App extends Component {
  renderPosts = () => {
    // const mapFunction = (post) => {
    //   return <Post post={post} />;
    // };

    const display = posts.map((post) => {
      return <Post post={post} />;
    });
    // [<Post post=[0]/>, <Post post[1]/>, <Post post[2]/>]
    return display;
  };

  render() {
    const display = posts.map((post) => {
      return <Post post={post} />;
    });

    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
