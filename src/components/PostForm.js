import React, { Component } from "react";

class PostForm extends Component {
  state = {
    posterName: "",
    resourceAuthor: "",
    cohort: "",
    title: "",
  };

  handleChange = (e) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form style={myStyles.form}>
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={this.state.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <input
            type="text"
            id="cohort"
            placeholder="Cohort #"
            value={this.state.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const myStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default PostForm;
