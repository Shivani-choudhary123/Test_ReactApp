import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addQuote } from '../action';

export default function NavBar(props) {
  const [newquotes, setQuoteText] = useState('');  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newquotes) {
      dispatch(addQuote(newquotes));  
      setQuoteText('');  
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-light-subtle rounded-1">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/AboutUs">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Quotes?limit=4&skip=0">Quotes</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Quote"
              aria-label="Search"
              value={newquotes}
              onChange={(e) => setQuoteText(e.target.value)} 
            />
            <button className="btn btn-primary" type="submit">Add</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

NavBar.defaultProps = {
  aboutText: 'About Us',
};
