import React from "react";
import { Link } from "react-router-dom";

export default function AllDances(props) {
  return (
    <div>
      <h3>All dances</h3>
      {props.dances.map(dance => (
        <React.Fragment key={dance.id}>
          <h5>{dance.name}</h5>
          <p>{dance.description}</p>
          <img src={dance.image} />
          <button
            onClick={() => {
              props.history.push(`/dances/${dance.id}/edit`);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.handleDanceDelete(dance.id);
            }}
          >
            Delete
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
