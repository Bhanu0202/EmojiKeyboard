import React from "react";
import ReactDOM from "react-dom";
import emojiData from "../public/emojidata.json";
import EmojiResult from "./emojiresult";

class List extends React.Component {
  state = {
    show: this.props.selected
  };
  render() {
    return (
      <div>
        {emojiData
          .filter(emoji => {
            if (emoji.title.toLowerCase().includes(this.props.selected)) {
              return true;
            }
            if (emoji.keywords.includes(this.props.selected)) {
              return true;
            }
            return false;
          })
          .map(emoji => (
            <EmojiResult
              key={emoji.title}
              symbol={emoji.symbol}
              changeValue={this.props.changeValue}
            />
          ))}
      </div>
    );
  }
}

export default List;
