import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import "./emojimenu.css";

class EmojiMenu extends React.Component {
  state = {
    selected: "smiley"
  };

  changeSelected = event => {
    this.setState({
      selected: event.target.value
    });
  };

  render() {
    return (
      <div className="menu">
        <div className="menu-type">
          <button
            className="menu-btn"
            onClick={this.changeSelected}
            value="smiley">
            🙂
          </button>
          <button
            className="menu-btn"
            onClick={this.changeSelected}
            value="food">
            🍔
          </button>
          <button
            className="menu-btn"
            onClick={this.changeSelected}
            value="flower">
            🌷
          </button>
          <button
            className="menu-btn"
            onClick={this.changeSelected}
            value="people">
            👩
          </button>
          <button
            className="menu-btn"
            onClick={this.changeSelected}
            value="game">
            ⚽️
          </button>
          <button
            className="menu-btn"
            onClick={this.changeSelected}
            value="office ">
            ✏️
          </button>
        </div>
        <List
          selected={this.state.selected}
          changeValue={this.props.changeValue}
        />
      </div>
    );
  }
}
export default EmojiMenu;
