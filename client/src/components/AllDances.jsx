import React from "react";


export default function AllDances(props) {
  
  return (

    <div>
      <h3>All dances</h3>
      {props.dances.map(dance => (
        <React.Fragment key={dance.id}>
          <h5>{dance.name}</h5>
          <p>{dance.description}</p>
          <img src={dance.image} alt={dance.name} />
          
{props.currentUser && props.currentUser.id === dance.user_id &&(
            <>
         
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
  </>
)}


        </React.Fragment>
      ))}
    </div>
  );
}
