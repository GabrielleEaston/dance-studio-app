import React, { Component } from "react";
import { getOneDance } from "../services/api-helper";
import { Link } from "react-router-dom";
export default class OneDance extends Component {
  state = {
    dance: null
  };
  componentDidMount() {
    this.setDance();
  }

  setDance = async () => {
    const dance = await getOneDance(this.props.danceId);
    this.setState({ dance });
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
    const { dance } = this.state;
    return (
      <div className="dance-container">
        {dance && (
          <div className="dance-info-container">
            <div key={dance.id}>
              <h5>{dance.name}</h5>
              <p>{dance.description}</p>
              <img src={dance.image} />
            </div>
           
          </div>
        )}
      </div>
    );
  }
}
