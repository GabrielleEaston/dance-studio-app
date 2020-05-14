import React, { Component } from "react";
import { getOneCategory } from "../services/api-helper";
import { Link } from "react-router-dom";
export default class Category extends Component {
  state = {
    category: null
  };
  componentDidMount() {
    this.setCategory();
  }

  setCategory = async () => {
    const category = await getOneCategory(this.props.categoryId);
    this.setState({ category });
  };

  // handleChange = (e) => {
  //   const { value } = e.target;
  //   this.setState({
  //     flavor: value
  //   })
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const food = await addFlavor(this.state.flavor, this.state.food.id);
  //   this.setState({ food });
  // }

  render() {
    const { category } = this.state;
    return (
      <div>
        {category && (
          <>
            {/* <h3>{category.name}</h3> */}
            {category.map(dance => (
              <div key={dance.id}>
                <p>{dance.name}</p>
                <p>{dance.description}</p>
                <img src={dance.image} />
                <Link to={`/dances/${dance.id}`}>
                  <button>Learn More</button>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}
