import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "../actions";
import Post from "./Post";

/*
  post list is in charge of displaying a list of post cards and passing along the select function.
  it has no state because...
*/

class PostList extends Component {
  state = {
    query: "",
    filteredPosts: [...this.props.posts.list],
  };

  handleChange = (e) => {
    const query = e.target.value;

    const newPosts = this.props.posts.list.filter(
      (post) =>
        post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        post.summary.toLowerCase().indexOf(query.toLowerCase()) > 0
      // {
      //   const lowPost = post.title.toLowerCase();
      //   const lowQuery = query.toLowerCase();
      //   const index = lowPost.indexOf(lowQuery);
      //   if (index >= 0) {
      //     return true;
      //   }
      //   return false;
      // }
    );

    this.setState({
      query: query,
      filteredPosts: newPosts,
    });
  };

  handleClick = () => {
    this.props.increment(this.props.posts.count);
  };

  renderPosts = () => {
    // const mapFunction = (post) => {
    //   return <Post post={post} />;
    // };

    const display = this.state.filteredPosts.map((post) => {
      return <Post post={post} key={post.id} />;
    });
    // [<Post post=[0]/>, <Post post[1]/>, <Post post[2]/>]
    return display;
  };

  render() {
    return (
      <div>
        {/* TODO: add searchbar */}
        <div style={myStyles.searchBar}>
          <p>
            <input
              style={myStyles.input}
              type="text"
              placeholder="🔍search titles"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div className="postList">{this.renderPosts()}</div>
        <div className="footer">
          <button onClick={this.handleClick}>increase</button>
          <p>{this.props.posts.count}</p>
        </div>
      </div>
    );
  }
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
  return {
    posts: store.posts,
  };
};

const mapActionsToProps = () => {
  return {
    increment,
  };
};

export default connect(mapStoreToProps, mapActionsToProps())(PostList);
