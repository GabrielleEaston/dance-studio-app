import React, { Component } from "react";
import { getUserPosts } from "../services/api-helper";
import { Redirect } from 'react-router-dom'
// import { Link } from "react-router-dom";
export default class MyPosts extends Component {
  state = {
    userPosts: null,
    updated: false,
    deleted: false
  };
  componentDidMount() {
    this.setUserPosts();
  }

  setUserPosts = async () => {
    if (this.props.currentUser !== null) {
      const userPosts = await getUserPosts(this.props.currentUser.id);
      this.setState({ userPosts });
      
    }
  };

  render() {
    const {updated, deleted } = this.state
    if (updated) {
      return <Redirect to={`/dances`} />
    }

    else if (deleted) {
      return <Redirect to={`/dances`} />
    }
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
