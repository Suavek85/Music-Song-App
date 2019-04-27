import React from 'react';
import './Search.css';


const Search = ({ buttonSubmit, searchChange }) => {
  return (
    <form className="search white-70" action="">
      <input type="search" onChange={searchChange} placeholder="Justin Bieber" required />
      <button type="button" onClick={buttonSubmit}>Search</button>
    </form>  
  );
}

export default Search;