import React from "react";

export default function AllDances(props) {
  return (
    <div className="dance-container">
      <h3>All dances</h3>
      {props.dances.map(dance => (
        <div key={dance.id} className="border-dance">
          <div className="dance-info-container">
            <h5>{dance.name}</h5>
            <p>{dance.description}</p>
            <img src={dance.image} alt={dance.name} />
          </div>
          {props.currentUser && props.currentUser.id === dance.user_id && (
            <>
              <button
                className="all-dances"
                onClick={() => {
                  props.history.push(`/dances/${dance.id}/edit`);
                }}
              >
                Edit
              </button>
              <button
                className="all-dances"
                onClick={() => {
                  props.handleDanceDelete(dance.id);
                }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
