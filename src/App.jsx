import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import SearchResults from "./components/pages/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:mediaType/:id" element={<Details />}></Route>
          <Route path="/search/:query" element={<SearchResults/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
