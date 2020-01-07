import React from "react";
import inputData from "./inputData";

const CHAR_INCREMENT_COUNTER = 4;
class HackerTyper extends React.Component {
  state = {
    charCount: 0,
    outputText: ""
  };

  listenerFunction() {
    this.setState({
      charCount: this.state.charCount + CHAR_INCREMENT_COUNTER,
      outputText: inputData.substring(
        0,
        this.state.charCount + CHAR_INCREMENT_COUNTER
      )
    });
    window.scrollTo(0, document.body.scrollHeight);
  }

  componentDidMount() {
    document.addEventListener("keydown", () => this.listenerFunction());
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", () => this.listenerFunction());
  }

  render() {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>{this.state.outputText}</div>
    );
  }
}

export default HackerTyper;
