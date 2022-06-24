import React from "react";

import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        name: "Saw 3D",
        rating: "7.5",
        overview:
          "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
        id: 1,
      },
      {
        name: "Blitz 007",
        rating: "11",
        overview:
          "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
        id: 2,
      },
      {
        name: "Hostage",
        rating: "6.3",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
        overview:
          "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
        id: 3,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
