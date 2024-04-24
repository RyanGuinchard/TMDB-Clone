import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../common/Nav/Navbar";
import Card from "../common/Card/Card";

// Import the API key from the environment variables
const { VITE_API_KEY } = import.meta.env;

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${VITE_API_KEY}&query=${query}`
    )
      .then((response) => setResults(response.data.results));
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4">
        {results.map((result) => (
          <div className="aspect-w-16 aspect-h-9 overflow-hidden" key={result.id}>
            <Card data={result} mediaType={result.media_type} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchResults;