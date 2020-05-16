import React, { Component } from "react";
import { getOneDance } from "../services/api-helper";

export default class UpdateDance extends Component {
  state = {
    name: "",
    description: "",
    image: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const danceItem = await getOneDance(this.props.danceId);
    this.setState({
      name: danceItem.name,
      description: danceItem.description,
      image: danceItem.image
    });
  };

  render() {
    const { name, description, image } = this.state;
    return (
      <form
        className="login-form"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleDanceUpdate(this.props.danceId, this.state);
          this.props.history.push("/dances");
        }}
      >
        <h3>Edit a Post</h3>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="description">description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <label htmlFor="image">image url:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />

        <button>Submit</button>
      </form>
    );
  }
}
