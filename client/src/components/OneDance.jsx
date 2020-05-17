import React, { Component } from "react";
import { getOneDance } from "../services/api-helper";
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



  render() {
    const { dance } = this.state;
    return (
      <div className="dance-container">
        {dance && (
          <div className="dance-info-container">
            <div key={dance.id}>
              <h5>{dance.name}</h5>
              <p>{dance.description}</p>
              <img src={dance.image} alt={dance.name}/>
            </div>
           
          </div>
        )}
      </div>
    );
  }
}
