import React from 'react';

const Search = () => (
  <form id="dna-search" className="form-inline">
    <label htmlFor="search" className="sr-only">Enter a DNA search:</label>
    <input type="text" id="search" className="form-control" placeholder="Cypripedioideae"/>
    <button type="submit" className="btn btn-primary">Search</button>
  </form>
)

export default Search
