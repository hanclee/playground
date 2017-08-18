import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { results: [] }

  dnaSearch = (event) => {
    event.preventDefault();
    let search = ReactDOM.findDOMNode(this.refs.query).value;
    fetch('/api/search?q='+encodeURIComponent(search))
      .then(res => res.json())
      .then(response => {
        const results = response["features"];
        console.log("start results");
        this.setState({ results });
        console.log("end results");
      });
  }

  render() {
    const { results } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bio UI</h2>
        </div>
        <div className="App-intro">
          <form id="dna-search" className="form-inline">
            <label htmlFor="query" className="sr-only">Enter a DNA search:</label>
            <input type="text" id="query" ref="query" className="form-control" placeholder="CTCGGATA" />
            <button type="submit" className="btn btn-primary" onClick={this.dnaSearch}>Search</button>
          </form>
          {results && results.length ? (
            <div>
              <h3>{results.length} results.</h3>
              <table className="results">
                <tr>
                  <th>protein id</th>
                  <th>sequence start</th>
                  <th>sequence end</th>
                </tr>
                {results.map((result, index) =>
                  <tr key={index}>
                    <td>{result["protein_id"]}</td>
                    <td>{result["start"]}</td>
                    <td>{result["end"]}</td>
                  </tr>
                )}
              </table>
            </div>
          ) : (
            <div>
              <h3>No results.</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
