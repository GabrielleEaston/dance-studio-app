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
      <div>
        {dance && (
          <>
            <div key={dance.id}>
              <p>{dance.name}</p>
              <p>{dance.description}</p>
              <img src={dance.image} />
            </div>
            {/* <button onClick={() => {
            this.props.history.push(`/dances/${dance.id}/edit`);
          }}>Edit</button> */}
            {/* <Link to="/dances/new">
              <button>Create a post</button>
            </Link> */}
          </>
        )}
      </div>
    );
  }
}
