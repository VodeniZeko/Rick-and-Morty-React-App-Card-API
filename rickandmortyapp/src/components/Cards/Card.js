// YOU WILL BE ADDING PROPERTIES TO THIS FILE.
// NOTICE HOW WE BUILT OUT OUR CARD COMPONENT.
// VISUALIZE TO YOURSELF WHAT ELSE WE NEED FOR OUR CARD COMPONENT PROPERTY WISE

import React from "react";
/* ----------------------------
In this file, we'll build out the JSX of how we want our Cards to LOOK and what props we want to pass into each Card!

Properties we'll use that we can get from the API:
- ID
- Name
- Image
- Status (Alive/Dead)
- Species
- Gender
- Origin
- Last Location

So I built out a basic Card for us to start with. We'll pass in props later.
Remember, we'll need a PROPERTY for each CHARACTER's PROPERTY
ID has been done for you.
------------------------------*/

const Card = props => {
  console.log(props);
  return (
    <div className="card-parent">
      <img className="card-id" src={props.character.image} />
      <p className="card-id">name: {props.character.name} </p>
      <p className="card-id">status: {props.character.status} </p>
      <p className="card-id">species: {props.character.species} </p>
      <p className="card-id">gender: {props.character.gender} </p>
      <p className="card-id">origin: {props.character.origin.name} </p>
      <p className="card-id">
        appeared in: {props.character.episode.length} episodes
      </p>
    </div>
  );
};

export default Card;
