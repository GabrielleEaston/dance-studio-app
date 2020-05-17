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

 

  render() {
    const { category } = this.state;
    return (
      <div className="dance-container">
        {category && (
          <>
          
            {category.map(dance => (
              <div key={dance.id} className="border-dance">
                <div className="dance-info-container">
                <h5>{dance.name}</h5>
                <p>{dance.description}</p>
                  <img src={dance.image} alt={dance.name}/>
                  </div>
                <Link to={`/dances/${dance.id}`}>
                  <button className="all-dances">Learn More</button>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}
