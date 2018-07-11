import React, { Component } from 'react';
import '../styles/MoviesPage.css';
import MovieTile from './MovieTile';
import * as moviesActions from "../actions/MoviesActionCreator";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            favouriteMovies: []
        };

        this.addToFavourites  = this.addToFavourites.bind(this);
        this.removeFromFavourites  = this.removeFromFavourites.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.showFavourites !== this.props.showFavourites) {
            if (nextProps.showFavourites) {
                this.setState({favouriteMovies: this.props.movies.filter((movie) => movie.Favourite)});
            } 
        }
    };

    componentDidMount() {
        this.props.moviesActions.fetchMovies();

        // axios.get('http://www.mocky.io/v2/5b44a1b92f00006400583823').then(response => {
        //     console.log(response);
        //     this.setState({
        //         movies: response.data
        //     })
        // })
    }

    addToFavourites (selectedMovie) {
        let tempMovies = this.props.movies;
        tempMovies.forEach(function(movie,index){ 
            if(movie.imdbID === selectedMovie.imdbID) 
                movie.Favourite = true ;
        })  

       this.setState({movies: tempMovies});
    };

    removeFromFavourites () {

    };

    render() {
        const movies = this.props.showFavourites ? this.state.favouriteMovies : this.props.movies;
        return (
            movies.map((movie, index) => (
                <MovieTile 
                    movie={movie} 
                    key={index} 
                    showFavourites={this.props.showFavourites} 
                    addToFavouritesHandler={this.addToFavourites} 
                    removeFromFavouritesHandler={this.removeFromFavourites} 
                />
            ))
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.moviesReducer.movies || []
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        moviesActions: bindActionCreators(moviesActions, dispatch) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);