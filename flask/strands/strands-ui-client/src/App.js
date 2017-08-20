import React, { Component } from 'react';
import {parse} from 'query-string';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let query = "";
    let params = parse(window.location.search);
    if(params && params.q) {
      query = params.q;
    }
    this.dnaSearch(query);

    this.state = { query: query, features: [], history: null, warning: null }
  }

  queryChangeHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  dnaSearchHandler = (event) => {
    event.preventDefault();
    let search = this.state.query.toUpperCase();
    this.dnaSearch(search);
  }

  dnaSearch = (search) => {
    fetch('/api/search?q='+encodeURIComponent(search), {
      credentials: "same-origin"
      }).then(res => res.json())
      .then(response => {
        const features = response["features"];
        const history = response["history"];
        const warning = response["warning"];
        this.setState({ features: features, history: history, warning: warning });
      });
  }

  render() {
    let features = this.state.features;
    let history = this.state.history;
    let warning = this.state.warning || "";

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bio UI</h2>
        </div>
        <div className="App-intro">
          <form id="dna-search" className="form-inline">
            <label htmlFor="query" className="sr-only">Enter a DNA search:</label>
            <input type="text" id="query" ref="query" className="form-control" value={this.state.query} placeholder="CTCGGATA" onChange={this.queryChangeHandler}/>
            <button type="submit" className="btn btn-primary" onClick={this.dnaSearchHandler}>Search</button>
          </form>
          {history && history.length > 0 &&
            <div>
              <h3>Prior searches:</h3>
              <ul className="history">
                {history.map((result, index) =>
                  <li key={index}>
                    <a href={"/dns-search?q="+result}>{result}</a>
                  </li>
                )}
              </ul>
            </div>
          }
          {features && features.length ? (
            <div>
              <h3>{features.length} results. {warning}</h3>
              <table className="results">
                <thead>
                  <tr>
                    <th>protein id</th>
                    <th>sequence start</th>
                    <th>sequence end</th>
                  </tr>
                </thead>
                <tbody>
                {features.map((result, index) =>
                  <tr key={index}>
                    <td>{result["protein_id"]}</td>
                    <td>{result["start"]}</td>
                    <td>{result["end"]}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h3>No results. {warning}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
