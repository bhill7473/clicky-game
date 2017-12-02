import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

import "./App.css";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
     // Filter this.state.friends for friends with an id not equal to the id being removed
     const friends = this.state.friends.filter(friend => friend.id !== id);
     // Set this.state.friends equal to the new friends array
     this.setState({ friends });
   };
   var breeds = ["German Shepard", "Labrador Retriver", "Rottweiler", "Beagle", "Bulldog", "Dachshund", "Siberian Husky", "Pug", "Akita", "St Bernard", "Corgi", "Terrier"];
   var arrayLength = breeds.length;
   for (var i = 0; i < arrayLength; i++) {}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <h3 id="breedContainer">""</h3>
      <h2>Score:{this.state.Score}</h2>
      <Title>Dog Guesser</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
