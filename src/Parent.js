import React, { Component } from "react";

class Parent extends Component {
  render() {
    const slideToShow = this.props.slidesData.filter(slide => {
      return slide.id === this.props.currentSlide;
    });
    console.log(slideToShow);
    return (
      <React.Fragment>
        <br />
        {slideToShow.length <= 0 ? (
          <div>No more slides</div>
        ) : (
          <div>
            <h1>{slideToShow[0].title}</h1>
            <p>{slideToShow[0].description}</p>
          </div>
        )}
        <br />
      </React.Fragment>
    );
  }
}

export default Parent;
