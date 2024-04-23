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
      <div className="details-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Details;