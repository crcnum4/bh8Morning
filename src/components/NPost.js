import React from "react";

const NPost = ({ post }) => {
  // the paramater is doing this:
  // const {post} = props;

  return (
    <div className={"nbox"}>
      <h2 className="n" id="ntitle">
        {post.title}
      </h2>
      <p className="n" id="nauthor">
        {post.resourceAuthor}
      </p>
      {post.videoLength ? (
        <p className="n" id="nlength">
          Length: {post.videoLength}
        </p>
      ) : null}
      {/* {conditional ? true code : false code} */}
      <p className="n" id="nrating">
        Rating: {post.rating}
      </p>
      <p className="n" id="ncomments">
        Comments: {post.comments.length}
      </p>
    </div>
  );
};

export default NPost;
