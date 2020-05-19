import React from "react";
import { connect } from "react-redux";
import { increment, changeQuery } from "../actions";
import Post from "./Post";

/*
  post list is in charge of displaying a list of post cards and passing along the select function.
  it has no state because...
*/

const PostList = (props) => {

  const handleChange = (e) => {
    const query = e.target.value;

    props.changeQuery(query, props.posts.list);
  };

  const handleClick = () => {
    props.increment(props.posts.count);
  };

  const renderPosts = () => {

    const display = props.search.list.map((post) => {
      return <Post post={post} key={post.id} />;
    });
    return display;
  };

  return (
    <div>
      <div style={myStyles.searchBar}>
        <p>
          <input
            style={myStyles.input}
            type="text"
            placeholder="🔍search titles"
            value={props.search.query}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="postList">{renderPosts()}</div>
      <div className="footer">
        <button onClick={handleClick}>increase</button>
        <p>{props.posts.count}</p>
      </div>
    </div>
  );
}

const myStyles = {
  searchBar: {
    flex: 1,
    flexDirection: "row",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom: 16,
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  },
};

const mapStoreToProps = (store) => {

  // PostList.props.p = store.posts
  return {
    posts: store.posts,
    search: store.search
  };
};

const mapActionsToProps = () => {
  return {
    increment,
    changeQuery
  };
};

export default connect(mapStoreToProps, mapActionsToProps())(PostList);