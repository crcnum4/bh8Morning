import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ViewPost extends Component {
  render() {
    const { postId } = this.props.match.params;
    const post = this.props.post[postId - 1];
    return (
      <div>
        <h3>{post.title}</h3>
        <h5>{post.resourceAuthor}</h5>
        <p>{post.summary}</p>
        <p>{post.link}</p>
      </div>
    );
  }
}

export default withRouter(ViewPost);
