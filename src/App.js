import React, { Component } from "react";
import "./App.css";
import Post from "./components/Post";
import AvaPost from "./components/AvaPost";
import MPost from "./components/MPost";
import NPost from "./components/NPost";
import SPost from "./components/SPost";
import posts from "./mock/posts";

class App extends Component {
  renderPosts = () => {
    // const mapFunction = (post) => {
    //   return <Post post={post} />;
    // };

    const display = posts.map((post) => {
      switch (post.posterName) {
        case "Ava Callery":
          return <AvaPost post={post} />;
        case "Michael Spremulli":
          return <MPost post={post} />;
        case "Nicole Luguesi":
          return <NPost post={post} />;
        case "Stephanie Rodriguez":
          return <SPost post={post} />;
        default:
          return <Post post={post} />;
      }
    });
    // [<Post post=[0]/>, <Post post[1]/>, <Post post[2]/>]
    return display;
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        <div className="postList">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default App;
