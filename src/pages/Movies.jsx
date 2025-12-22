import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  return dummyShowsData && dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60  px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
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
