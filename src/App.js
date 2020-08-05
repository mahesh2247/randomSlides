
import React, { Component } from "react";
import Parent from "./Parent";
import Child from "./Child";

const defaultSlide = 1;
class App extends Component {
  slidesData = [
    { id: 1, title: "Today's Workout Plan", description: "We're gonna do 3 fundamental exercises." },
    { id: 2, title: "First, 10 push-ups", description: "Do 10 reps. Remember about full range of motion. Don't rush" },
    { id: 3, title: "Next, 20 squats", description: "Squats are important , remember to keep your back straight." },
    { id: 4, title: "Finally, 15 sit-ups", description: "Slightly bend your knees. Remember about full range of motion" },
    { id: 5, title: "Great job!", description: "You made it, have a nice day and see you next time." }
  ];

  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 1
    };
  }

  handleSlide = (action, currentSlide) => {
    if (
      (currentSlide - 1 < defaultSlide && action === "prev") ||
      (currentSlide + 1 > this.slidesData.length && action === "next")
    ) {
      return this.setState({ currentSlide: currentSlide });
    } else {
      switch (action) {
        case "prev":
          currentSlide -= 1;
          return this.setState({ currentSlide: currentSlide });
        case "next":
          currentSlide += 1;
          return this.setState({ currentSlide: currentSlide });
        default:
          return this.setState({ currentSlide: defaultSlide });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Parent
          currentSlide={this.state.currentSlide}
          slidesData={this.slidesData}
        />
        <Child
          getButtonStatus={this.handleSlide}
          currentSlide={this.state.currentSlide}
        />
      </div>
    );
  }
}

export default App;
