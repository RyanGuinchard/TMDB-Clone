import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../common/Nav/Navbar";
import { Link } from 'react-router-dom';

const Results = ({ type }) => {
  const [data, setData] = useState([]);
  const { VITE_API_KEY } = import.meta.env;

  const typeCategories = {
    movie: ["popular", "top_rated", "now_playing", "upcoming"],
    tv: ["popular", "airing_today", "top_rated"],
    person: ["popular"],
  };

  useEffect(() => {
    const categories = typeCategories[type];
    if (!categories) {
      console.error(`Invalid type: ${type}`);
      return;
    }

    const requests = categories.flatMap((category) =>
      Array.from({ length: 5 }, (_, i) =>
        axios
          .get(
            `https://api.themoviedb.org/3/${type}/${category}?api_key=${VITE_API_KEY}&page=${
              i + 1
            }`
          )
          .then((response) => response.data)
      )
    );

    Promise.all(requests)
      .then((data) => setData(data))
      .catch((error) => console.error("API request error:", error));
  }, [type, VITE_API_KEY]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.map((response, index) => (
            response.results.map(item => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path || item.poster_path}`}
                  alt={item.name || item.title}
                />
                <div>
                  <h2 className="text-lg font-bold">
                    <Link to={`/details/${type}/${item.id}`}>
                      {item.name || item.title}
                    </Link>
                  </h2>
                </div>
              </div>
            ))
          ))}
      </div>
    </>
  );
};

export default Results;