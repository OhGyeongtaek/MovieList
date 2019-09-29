import React, { Component } from 'react';
import './MoviesList.css';


class MoviesList extends Component {
	render(){
		return this.props.movies.map((data, idx) => {
			return <MoviesCol key={'MoviesCol'+((this.props.page-1)*12 + idx)} movie={data} />
		});
	}
}

class MoviesCol extends Component{
	render(){
		let data = this.props.movie;
		return(
			<div className="wrap-movie-data">
				<MoviesImg imgURL = {data.large_cover_image} title={data.title}/>
				<ul>
					<li className="title">{data.title}</li>
					<li className="rating">평점 : {data.rating}점</li>
					<li className="discript">{data.description_full}</li>
				</ul>
			</div>
		);
	}
} 

class MoviesImg extends Component{
	render(){
		return (
			<img src={this.props.imgURL} alt={this.props.title} title={this.props.title}/>
		);
	}
}

export default MoviesList