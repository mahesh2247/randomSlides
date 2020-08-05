import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.props.getButtonStatus("prev", this.props.currentSlide)
          }
        >
          Prev
        </button>
        <button
          onClick={() =>
            this.props.getButtonStatus("reset", this.props.currentSlide)
          }
        >
          reset
        </button>
        <button
          onClick={() =>
            this.props.getButtonStatus("next", this.props.currentSlide)
          }
        >
          next
        </button>
      </div>
    );
  }
}

export default Child;
