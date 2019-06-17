import React from "react";
import ReactDOM from "react-dom";
import SearchResult from "./searchresult";
import "./searchbox.css";

class SearchBox extends React.Component {
  state = {
    inputIsOpen: false,
    search: ""
  };

  handleShow = () => {
    this.setState({
      inputIsOpen: !this.state.inputIsOpen
    });
  };
  handleSearch = event => {
    this.setState({
      inputIsOpen: true,
      search: event.target.value
    });
    console.log(this.state.search);
  };

  render() {
    var show = this.state.inputIsOpen;
    return (
      <div>
        {show === true && (
          <input
            autoFocus
            value={this.state.search}
            onChange={this.handleSearch}
          />
        )}
        <button className="srch-btn" onClick={this.handleShow}>
          Search Emoji
        </button>
        {show === true && (
          <SearchResult
            search={this.state.search}
            changeValue={this.props.changeValue}
          />
        )}
      </div>
    );
  }
}
export default SearchBox;
