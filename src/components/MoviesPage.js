import React, { Component } from 'react';
import '../styles/MoviesPage.css';
import MovieList from './MovieList';

class MoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFavourites : false,
        };

        this.toggleShowFavourites  = this.toggleShowFavourites.bind(this);
    };

    toggleShowFavourites() {
        this.setState({showFavourites: !this.state.showFavourites});
    }

    render() {
        return (
            <div className="movies-panel">
                <p>
                    <input type="radio" id="allMovies" checked={!this.state.showFavourites} name="listType" onChange={this.toggleShowFavourites} />
                    <label htmlFor="allMovies">All</label>
                    <input type="radio" id="favouriteMovies" checked={this.state.showFavourites} name="listType" onChange={this.toggleShowFavourites} />
                    <label htmlFor="favouriteMovies">Favourites</label>                
                </p>

                <MovieList showFavourites={this.state.showFavourites} />
            </div>
        );
}
}

export default MoviesPage;
