import React, { Component } from "react";
import { Redirect } from "react-router-dom";

/*
  display an individual post and controll redirect on click
  has state because...
*/

class Post extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    const { post } = this.props;
    // the paramater is doing this:
    // const {post} = props;

    return (
      <div className={"box"} onClick={() => this.handleClick()}>
        {this.state.clicked ? <Redirect to={`/post/${post.id}`} /> : null}
        <h2>{post.title}</h2>
        <p>{post.resourceAuthor}</p>
        {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
        {/* {conditional ? true code : false code} */}
        <p>Rating: {post.rating}</p>
        <p>Comments: {post.comments.length}</p>
      </div>
    );
  }
}

export default Post;
