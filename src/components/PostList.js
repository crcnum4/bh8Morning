import React from "react";
import Post from "./Post";

const PostList = (props) => {
  const renderPosts = () => {
    // const mapFunction = (post) => {
    //   return <Post post={post} />;
    // };

    const display = props.posts.map((post) => {
      return <Post post={post} />;
    });
    // [<Post post=[0]/>, <Post post[1]/>, <Post post[2]/>]
    return display;
  };

  return <div className="postList">{renderPosts()}</div>;
};

export default PostList;
