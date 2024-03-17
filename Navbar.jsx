import React, { Component } from 'react';

class Navbar extends Component {

  handleCategoryChange = (category) => {
    this.props.onCategoryChange(category);
    document.title = category; 
  };

  render() {
    return (
      <div style={{ backgroundColor: "#8a8988" }}>
        <nav className="navbar navbar-expand-lg mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item me-1">
                  <button
                    className="nav-link"
                    onClick={() => this.handleCategoryChange("Business")}
                  >
                    Business
                  </button>
                </li>
                <li className="nav-item me-1">
                  <button
                    className="nav-link"
                    onClick={() => this.handleCategoryChange("Science")}
                  >
                    Science
                  </button>
                </li>
                <li className="nav-item me-1">
                  <button
                    className="nav-link"
                    onClick={() => this.handleCategoryChange("Sports")}
                  >
                    Sports
                  </button>
                </li>
                <li className="nav-item me-1">
                  <button
                    className="nav-link"
                    onClick={() => this.handleCategoryChange("Technology")}
                  >
                    Technology
                  </button>
                </li>
              </ul>
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2 border border-primary"
                  type="search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success me-3" type="submit">
                  Search
                </button>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                    id="Dmode"
                  >
                    Enable DarkMode
                  </label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
