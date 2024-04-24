import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../common/Nav/Navbar";

// Import the API key from the environment variables
const { VITE_API_KEY } = import.meta.env;

function Details() {
  const { id, mediaType } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${VITE_API_KEY}`
    )
      .then((response) => setDetails(response.data));
  }, [id, mediaType]);

  if (!details) {
    return null;
  }

  const imagePath = details.profile_path || details.poster_path;
  const title = details.name || details.title;
  const description = details.biography || details.overview;

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-start bg-base-200 p-4 rounded-box max-w-7xl mx-auto">
        <img
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={title}
        />
        <div className="mt-4 md:mt-0 md:ml-6 text-left">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p>{description}</p>
          {mediaType === 'movie' && (
            <>
              <p>Release Date: {details.release_date}</p>
              <p>Rating: {details.vote_average}</p>
              <p>Genres: {details.genres.map(genre => genre.name).join(', ')}</p>
              <p>Runtime: {details.runtime} minutes</p>
            </>
          )}
          {mediaType === 'tv' && (
            <>
              <p>First Air Date: {details.first_air_date}</p>
              <p>Rating: {details.vote_average}</p>
              <p>Genres: {details.genres.map(genre => genre.name).join(', ')}</p>
              <p>Number of Seasons: {details.number_of_seasons}</p>
            </>
          )}
          {mediaType === 'person' && (
            <>
              <p>Known For: {details.known_for_department}</p>
              <p>Place of Birth: {details.place_of_birth}</p>
              <p>Birthday: {details.birthday}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Details;