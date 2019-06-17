import React from "react";
import ReactDOM from "react-dom";

class TextBox extends React.Component {
  render() {
    const txtStyle = {
      overflow: "hidden",
      padding: "5px",
      borderRadius: "5px",
      margin: "20px 0",
      fontFamily: "Georgia",
      fontSize: "16px"
    };
    return (
      <div>
        <textarea
          ref={input => input && input.focus()}
          value={this.props.value}
          onChange={this.props.changeValue}
          rows="3"
          cols="30"
          style={txtStyle}
          placeholder="Write your message.."
        />
      </div>
    );
  }
}
export default TextBox;
