import React, { Component } from "react";

export default class CreateDance extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    category_id: "",
    user_id: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  // handleSelect(event) {
  //   this.setState({ user_id: event.target.value });
  // }
  handleChangeSelect = e => {
    const { value } = e.target;
    this.setState({
      user_id: value
    });
  };

  handleChangeSelectCategory = e => {
    const { value } = e.target;
    this.setState({
      category_id: value
    });
  };

  // name="username"
  // value={username}

  render() {
    const { name, description, image, category_id, user_id } = this.state;
    return (
      <form className="login-form"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleDanceSubmit(this.state);
          this.props.history.push("/dances");
        }}
      >
        <h3>Create a Post</h3>
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

        <select onChange={this.handleChangeSelectCategory}>
          <option>--Select a category--</option>
          {this.props.categories.map(category => (
            <option name="category_id" value={category.id} key={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        {this.props.currentUser && (
          <>
            <select onChange={this.handleChangeSelect}>
              <option>--Your username--</option>
              <option name={user_id} value={this.props.currentUser.id}>
                {this.props.currentUser.username}
              </option>
            </select>
          </>
        )}

        <button>Submit</button>
      </form>
    );
  }
}
