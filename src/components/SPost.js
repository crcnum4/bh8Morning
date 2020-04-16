import React from "react";

const SPost = ({ post }) => {
  // the paramater is doing this:
  // const {post} = props;

  return (
    <div className={"sbox"}>
      <h2 id="stext">{post.title}</h2>
      <p id="stext">{post.resourceAuthor}</p>
      {post.videoLength ? <p id="stext">Length: {post.videoLength}</p> : null}
      {/* {conditional ? true code : false code */}
      <p id="stext">Rating: {post.rating}</p>
      <p id="stext">Comments: {post.comments.length}</p>
      <p id="stext">{post.length}</p>
    </div>
  );
};

export default SPost;
