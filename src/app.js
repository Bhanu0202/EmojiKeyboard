import React from "react";
import ReactDOM from "react-dom";
import TextBox from "./textbox";
import EmojiMenu from "./emojimenu";
import SearchBox from "./searchbox";
import "./app.css";

class App extends React.Component {
  state = {
    value: ""
  };

  handleValue = event => {
    this.setState({
      value: this.state.value + event.target.value
    });
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <header>EMOJI KEYBOARD</header>
        <main>
          <TextBox value={this.state.value} changeValue={this.handleChange} />
          <SearchBox changeValue={this.handleValue} />
          <EmojiMenu changeValue={this.handleValue} />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
