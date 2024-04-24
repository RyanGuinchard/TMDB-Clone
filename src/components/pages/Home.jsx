import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../common/Nav/Navbar";
import Card from "../common/Card/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setMovies(response.data.results.slice(0, 6));
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <h1>Popular Movies</h1>
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <div className="w-full md:w-1/2 p-2" key={movie.id}>
              <div className="p-2">
                <Card data={movie} mediaType="movie" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;