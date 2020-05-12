import React, { Component } from "react";
import { connect } from "react-redux";
import { changeForm, submitForm } from "../actions";
import Button from "./common/Button";

const INITIAL_STATE = {
  id: 0,
  posterName: "",
  resourceAuthor: "",
  jobSkillLevel: "",
  cohort: "",
  title: "",
  categories: "",
  summary: "",
  link: "",
  resourceType: "",
  datePublished: "",
  videoLength: "",
  timeToComplete: "",
  rating: "",
  comments: [],
};

class PostForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    // this.setState({
    //   ...this.state,
    //   [e.target.id]: e.target.value,
    // });
    this.props.changeForm(e.target.id, e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // add any form validation
    this.props.submitForm(this.props.newPost.form);
  };

  render() {
    const { form } = this.props.newPost;

    return (
      <div>
        <form style={myStyles.form} onSubmit={(e) => this.handleSubmit(e)}>
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            style={myStyles.input}
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={form.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            style={myStyles.input}
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={form.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <select
            style={myStyles.input}
            id="jobSkillLevel"
            value={form.jobSkillLevel}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="" disabled>
              Author skill level
            </option>
            <option value="Intro">Intro</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <input
            style={myStyles.input}
            type="text"
            id="cohort"
            placeholder="Cohort #"
            value={form.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="text"
            id="title"
            placeholder="title"
            value={form.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="text"
            id="categories"
            placeholder="Categories (seperate multiples with commas)"
            value={form.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="text"
            id="link"
            placeholder="Resource Link"
            value={form.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={form.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={form.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="text"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={form.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="text"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={form.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type="number"
            id="rating"
            placeholder="1 to 5 rating"
            value={form.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

const myStyles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
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
    newPost: store.newPost,
  };
};

export default connect(mapStoreToProps, {
  changeForm,
  submitForm,
})(PostForm);
