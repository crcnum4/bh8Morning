import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "./common/Button";

class ViewPost extends Component {
  state = {
    showComments: false,
  };

  clickHandler = () => {
    this.setState({
      showComments: !this.state.showComments,
    });
  };

  renderComments = (post) => {
    return post.comments.map((comment) => {
      return (
        <div className="box">
          <p>{comment.commenter}</p>
          <p>{comment.text}</p>
        </div>
      );
    });
  };

  render() {
    const { postId } = this.props.match.params;
    const post = this.props.post[postId - 1];
    return (
      <div>
        <h3>{post.title}</h3>
        <h5>{post.resourceAuthor}</h5>
        <p>{post.summary}</p>
        <p>{post.link}</p>
        <Button onClick={this.clickHandler}>
          {this.state.showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {this.state.showComments ? this.renderComments(post) : null}
      </div>
    );
  }
}

export default withRouter(ViewPost);
