import React from "react";
import SearchBar from "./SearchBar";
import unSplash from "../api/unsplash";

class App extends React.Component {
  state = { results: [] };

  onSearchSubmit = async (query) => {
    const { data } = await unSplash.get("search/photos", { params: { query } });
    this.setState({ results: data.results });
  };

  renderResults = () => {
    return (
      <div style={{ marginTop: "20px" }}>
        {this.state.results.map((data, index) => {
          return (
            <div key={index}>
              <label>{data.alt_description}</label>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div>{this.renderResults()}</div>
      </div>
    );
  }
}

export default App;
