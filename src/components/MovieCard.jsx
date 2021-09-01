import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const {
      movie: { title, subtitle, storyline, imagePath, rating },
    } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

export default MovieCard;
