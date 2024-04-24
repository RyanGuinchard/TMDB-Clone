import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import SearchResults from "./components/pages/SearchResults";
import Results from "./components/pages/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/movies" element={<Results type="movie" />} />
          <Route path="/tv" element={<Results type="tv" />} />
          <Route path="/people" element={<Results type="person" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
