import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import ViewPost from "./components/ViewPost";
import PostForm from "./components/PostForm";

const App = (props) => {
  //"global" state without redux
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <PostList />
          </Route>
          <Route path="/add" exact>
            <PostForm />
          </Route>
          <Route path="/post/:postId">
            {/* <ViewPost post={this.state.posts[this.state.selected - 1]} /> */}
            <ViewPost />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
