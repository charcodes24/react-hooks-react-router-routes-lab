import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map((actor) => {
    return <div key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie) => {
                  return <li>{movie}</li>
                })}
              </ul>
          </div>
  })


  return (
    <div>
      <h1>Actors</h1>
      {displayActors}
    </div>
  )
}

export default Actors;
