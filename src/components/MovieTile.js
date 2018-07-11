import React, { Component } from 'react';
import '../styles/MoviesPage.css';

class MovieTile extends Component {
    
    render() {
        return (
            <div className="movie-tile">
                <img className="posterImg" src={this.props.movie.Poster} alt="" />
                <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <p><button onClick={ () => this.props.addToFavouritesHandler(this.props.movie)}>Add to favourites</button></p>
            </div>
        );
    }
}

export default MovieTile;
