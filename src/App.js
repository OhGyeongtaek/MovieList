import React, { Component } from 'react';
import './App.css';
import MoviesList from './MoviesList.js';
class App extends Component {
	state = null;
	limit = '10';
	/* React Lifecycle */
	/* componentWillMount > render > componentDidMount */

	/* render되기 전에 실행되는 메서드 */
	componentWillMount(){}

	/* render가 실행된 후 실행되는 메서드 */
	componentDidMount(){
		let url = 'https://yts.lt/api/v2/list_movies.json?limit='+this.limit;
		fetch(url)
		.then(respons =>  respons.json())
		.then(movies => { this.setState(movies) });
	}

	render() {
		return (
			<div>{this.state === null? 'Lodding' :  this._makeMovieList() }</div>
		);
	}

	_makeMovieList(){
		return <MoviesList movies = {this.state.data.movies}/>;
		/*return this.state.data.movies.map( (movieData,idx) =>{
			return <MoviesList key = {idx} imgURL = {movieData.large_cover_image} movieData = {movieData}/>;
		});*/
	}
}

export default App;