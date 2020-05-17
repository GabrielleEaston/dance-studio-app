import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  getAllCategories,
  getAllDances,
  postDance,
  putDance,
  destroyDance,
 
} from "../services/api-helper";
import Login from "./Login";
import Register from "./Register";
import Categories from "./Categories";
import Category from "./Category";
import OneDance from "./OneDance";
import CreateDance from "./CreateDance";
import AllDances from "./AllDances";
import UpdateDance from "./UpdateDance";
import MyPosts from "./MyPosts";
export default class Main extends Component {
  state = {
    categories: [],
    dances: []
  };

  componentDidMount() {
    this.readAllCategories();
    this.readAllDances();
  }
  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };

  readAllDances = async () => {
    const dances = await getAllDances();
    this.setState({ dances });
  };

  handleDanceSubmit = async danceData => {
    const newDance = await postDance(danceData);
    this.setState(prevState => ({
      dances: [...prevState.dances, newDance]
    }));
  };

  handleDanceUpdate = async (id, danceData) => {
    const updatedDance = await putDance(id, danceData);
    this.setState(prevState => ({
      dances: prevState.dances.map(dance => {
        return dance.id === id ? updatedDance : dance;
      })
    }));
  };

  handleDanceDelete = async id => {
    await destroyDance(id);
    this.setState(prevState => ({
      dances: prevState.dances.filter(dance => {
        return dance.id !== id;
      })
    }));
  };
 

  render() {
    return (
      <main className="main-container">
        <Route
          path="/login"
          render={props => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/register"
          render={props => (
            <Register {...props} handleRegister={this.props.handleRegister} />
          )}
        />

        <Route
          exact
          path="/categories"
          render={props => (
            <Categories
              {...props}
              categories={this.state.categories}
              dances={this.state.dances}
            />
          )}
        />

        {/* <Route
          exact
          path="/dances"
          render={props => <AllDances {...props} dances={this.state.dances} />}
        /> */}
        <Route
          exact
          path="/dances"
          render={props => (
            <AllDances
              {...props}
              handleDanceDelete={this.handleDanceDelete}
              dances={this.state.dances}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <Route
          exact
          path="/categories/:id"
          render={props => {
            const { id } = props.match.params;
            return (
              <Category
                categoryId={id}
                // categories={this.state.categories}
                // dances={this.state.dances}
              />
            );
          }}
        />
        <Route
          exact
          path="/users/posts"
          render={props => {
            return (
              <MyPosts
                {...props}
                handleDanceDelete={this.handleDanceDelete}
                dances={this.state.dances}
                currentUser={this.props.currentUser}
                
                // categories={this.state.categories}
                // dances={this.state.dances}
              />
            );
          }}
        />

        <Route
          exact
          path="/dances/:id"
          render={props => {
            const { id } = props.match.params;
            return (
              <OneDance
                {...props}
                danceId={id}
                // categories={this.state.categories}
                // dances={this.state.dances}
              />
            );
          }}
        />

        <Route
          path="/dances/new"
          render={props => (
            <CreateDance
              {...props}
              handleDanceSubmit={this.handleDanceSubmit}
              categories={this.state.categories}
              currentUser={this.props.currentUser}
            />
          )}
        />

        <Route
          path="/dances/:id/edit"
          render={props => {
            const { id } = props.match.params;
            return (
              <UpdateDance
                {...props}
                handleDanceUpdate={this.handleDanceUpdate}
                danceId={id}
              />
            );
          }}
        />
      </main>
    );
  }
}
