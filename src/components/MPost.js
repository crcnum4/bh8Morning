import React from "react";

const MPost = ({ post }) => {
  return (
    <div className="mpost">
      <h2>{post.title}</h2>
      <p>{post.resourceAuthor}</p>
      {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
      <p className="mcomments">Comments: {post.comments.length}</p>
    </div>
  );
};

export default MPost;
