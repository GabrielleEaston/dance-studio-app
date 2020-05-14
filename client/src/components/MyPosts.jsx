import React, { Component } from "react";
import { getUserPosts } from "../services/api-helper";
// import { Link } from "react-router-dom";
export default class MyPosts extends Component {
  state = {
    userPosts: null
  };
  componentDidMount() {
    this.setUserPosts();
  }

  setUserPosts = async () => {
    const userPosts = await getUserPosts(3);
    this.setState({ userPosts });
  };

  render() {
    const { userPosts } = this.state;
    return (
      <div>
        {this.props.currentUser && (
          <div>
            <h1 >{this.props.currentUser.username}'s posts</h1>
            
        </div>)} 
       
        {userPosts ? (
          <>
       
            {userPosts.map(dance => (
              <React.Fragment key={dance.id}>
                <h5>{dance.name}</h5>
                <p>{dance.description}</p>
                <img src={dance.image} alt={dance.name} />

                <button
                  onClick={() => {
                    this.props.history.push(`/dances/${dance.id}/edit`);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    this.props.handleDanceDelete(dance.id);
                  }}
                >
                  Delete
                </button>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <h2>You have no posts</h2>
          </>
        )}
      </div>
    );
  }
}
