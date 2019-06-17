import React from "react";
import ReactDOM from "react-dom";
import emojiData from "../public/emojidata.json";
import EmojiResult from "./emojiresult";

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        {emojiData
          .filter(emoji => {
            if (emoji.title.toLowerCase().includes(this.props.search)) {
              return true;
            }
            if (emoji.keywords.includes(this.props.search)) {
              return true;
            }
            return false;
          })
          .sort(function(a, b) {
            return a.title.length - b.title.length;
          })
          .slice(0, 5)
          .map(emoji => (
            <EmojiResult
              key={emoji.title}
              symbol={emoji.symbol}
              changeValue={this.props.changeValue}
            />
            //<p>emoji.title</p>
          ))}
      </div>
    );
  }
}
export default SearchResult;
