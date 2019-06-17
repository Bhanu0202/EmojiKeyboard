import React from "react";
import ReactDOM from "react-dom";
import "./emojiresult.css";

class EmojiResult extends React.Component {
  render() {
    return (
      <button
        className="emoji-btn"
        onClick={this.props.changeValue}
        value={this.props.symbol}>
        {this.props.symbol}
      </button>
    );
  }
}
export default EmojiResult;
