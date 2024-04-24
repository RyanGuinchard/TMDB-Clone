import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tmdbLogo from "../../../assets/logo.svg";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/movies" className="btn btn-ghost">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/tv" className="btn btn-ghost">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/people" className="btn btn-ghost">
                  People
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl flex items-center justify-center"
          >
            <img
              src={tmdbLogo}
              alt="TMDB"
              className="w-10 h-10 lg:w-16 lg:h-16 block max-w-full max-h-full"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/movies" className="btn btn-ghost">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/tv" className="btn btn-ghost">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/people" className="btn btn-ghost">
                People
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary ml-2">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
