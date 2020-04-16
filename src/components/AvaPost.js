import React from "react";

const AvaPost = ({ post }) => {
  // the paramater is doing this:
  // const {post} = props;

  return (
    <div className={"AvaBox"}>
      <div className={"AvaPostTitle"}>
        <h2>{post.title}</h2>
      </div>
      <b>{post.resourceAuthor}</b>
      <p>Poster: {post.posterName}</p>
      {post.videoLength ? <p>Length: {post.videolength}</p> : null}
      <i>"{post.summary}"</i>
      <p>Comments: {post.comments.length}</p>
    </div>
  );
};

export default AvaPost;
