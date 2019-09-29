import React, { Component } from 'react';
import './App.css';
import MoviesList from './MoviesList.js';

class App extends Component {
	state = null;
	limit = '12';
	url = 'https://yts.lt/api/v2/list_movies.json?limit=';
	page = 1;
	/* React Lifecycle */
	/* componentWillMount > render > componentDidMount */

	/* render되기 전에 실행되는 메서드 */
	componentWillMount(){}

	/* render가 실행된 후 실행되는 메서드 */
	componentDidMount(){
		/*영화 데이터를 가져옴(1페이지를 가져옴).*/
		this._getMovieData(1);
		
		window.addEventListener("scroll", this._onScroll);
	}
	
	render() {
		return (
			<div>{this.state === null? 'Lodding' :  this._makeMovieList() }</div>
		);
	}

	/* 영화 데이터를 yts api에서 가져온 후 state에 저장 */
	_getMovieData(page){
		let url = this.url+this.limit+'&page='+page;
		fetch(url)
		.then(respons =>  respons.json())
		.then(movies => { this.setState(movies); console.log(this.state); });
		
	}

	/* 영화 데이터를 특정 위치에 가면 데이터를 더 불러오는 이벤트 */
	_onScroll(e){
		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
			console.log(1);
		}
	}
	_makeMovieList(){
		return <MoviesList movies = {this.state.data.movies}/>;
		/*return this.state.data.movies.map( (movieData,idx) =>{
			return <MoviesList key = {idx} imgURL = {movieData.large_cover_image} movieData = {movieData}/>;
		});*/
	}
}

export default App;