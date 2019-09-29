import React, { Component } from 'react';
import './App.css';
import MoviesList from './MoviesList.js';

class App extends Component {
	state = null;
	limit = '12';
	url = 'https://yts.lt/api/v2/list_movies.json?limit=';
	page = 1;
	moviesDataArr = [];
	/* React Lifecycle */
	/* componentWillMount > render > componentDidMount */

	/* render되기 전에 실행되는 메서드 */
	componentWillMount(){
		/* scroll 이벤트를 window에 등록 */
		window.addEventListener("scroll", this._onScroll);
	}

	/* render가 실행된 후 실행되는 메서드 */
	componentDidMount(){
		/*영화 데이터를 가져옴(1페이지를 가져옴).*/
		this._getMovieData(1);
	}
	
	render() {
		return (
			<div>{this.state === null? 'Lodding' :  this._makeMovieList() }</div>
		);
	}

	/* 영화 데이터를 yts api에서 가져온 후 state에 저장 */
	_getMovieData(){
		let url = this.url+this.limit+'&page='+this.page;
		fetch(url)
		.then(respons =>  respons.json())
		.then(movies => { 
			if(this.state !== null){
				let tmpMovies = [
					...this.state.data.movies,
					...movies.data.movies
				];
				this.state.data.movies = tmpMovies;

				this.setState(this.state);
			}else{
				this.setState(movies);
			}
			
			this.page++;
		});
	}

	/* 영화 데이터를 특정 위치에 가면 데이터를 더 불러오는 이벤트 */
	_onScroll = (e) => {
		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
			this._getMovieData();
		}
	}

	_makeMovieList(){
		return <MoviesList key={'movieList'+this.page} movies = {this.state.data.movies} page={this.page}/>;
	}
}

export default App;