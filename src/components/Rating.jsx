import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <div className="rating">{rating}</div>
      </div>
    );
  }
}

export default Rating;
