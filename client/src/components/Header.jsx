import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h1>Dance</h1>
      {props.currentUser ? (
        <>
          <p>Welcome , {props.currentUser.username}</p>
          <button onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login/Register</Link>
      )}
      <hr />
      {props.currentUser && (
        <>
          <Link to="/categories">Categories</Link>
          <Link to="/dances">All Dances</Link>
          <Link to="/users/posts">My Posts</Link>
          <hr />
        </>
      )}
    </header>
  );
}
