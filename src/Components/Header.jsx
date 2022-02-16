import React from "react";
import { useDispatch } from "react-redux";
import { settopic } from "./action";

const Header = () => {
  
  const dispatch = useDispatch();
  
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className="nav-link btnclass"
                    onClick={() => dispatch(settopic("general"))}
                  >
                    General
                  </button>
                </li>
                <li className="nav-item active">
                  <button
                    className="nav-link btnclass"
                    aria-current="page"
                    onClick={() => dispatch(settopic("business"))}
                  >
                    Business
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btnclass"
                    onClick={() => dispatch(settopic("entertainment"))}
                  >
                    Entertainment
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btnclass"
                    onClick={() => dispatch(settopic("health"))}
                  >
                    Health
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btnclass"
                    onClick={() => dispatch(settopic("science"))}
                  >
                    Science
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btnclass"
                    onClick={() => dispatch(settopic("sports"))}
                  >
                    Sports
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btnclass"
                    onClick={() => dispatch(settopic("technology"))}
                  >
                    Technology
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
