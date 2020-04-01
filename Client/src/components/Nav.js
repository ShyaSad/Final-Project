import React from 'react';

export default ()=>{
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="home">
      AA Away
    </a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="daily-inspirations">
          Daily Inspirations
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="meetings"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Meetings
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="upcoming-meetings">
            Upcoming Meetings
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="favorites">
            Favorites
          </a>
        </div>
      </li>
    </ul>
  </nav>
}