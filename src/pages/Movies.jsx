import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  return dummyShowsData && dummyShowsData.length > 0 ? (
    <div>
      <h1>Now Showing</h1>
      <div>
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div>No Movies Available</div>
  );
};

export default Movies;
