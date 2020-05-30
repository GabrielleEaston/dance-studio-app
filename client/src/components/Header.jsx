import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h1>Dance</h1>
      {props.currentUser ? (
        <>
          <p>Welcome , {props.currentUser.username}</p>
          <button className="logout" onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">
          <span>Login/Register</span>
        </Link>
      )}
      <hr />
      {props.currentUser && (
        <>
          <Link to="/categories">Categories</Link>
          <Link to="/dances">All Dances</Link>
          <Link to="/users/posts">My classes</Link>
          <Link to="/new">Add Dance Class</Link>
          <hr />
        </>
      )}
    </header>
  );
}
