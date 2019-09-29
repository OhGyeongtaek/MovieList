import React, { Component } from 'react';
import './MoviesList.css';


class MoviesList extends Component {
	render(){
		let data = this.props.movies,
			moviesLng = data.length;
		
		let tmpNumArr = [],
			tmpHTMLArr = [],
			tmpNum = 0;
		
		
		for(let i =0; i < moviesLng; i++){
			if(tmpNumArr.indexOf(i) === -1){
				let tmpData = [data[i], data[i+1], data[i+2]];
				tmpNumArr = [...tmpNumArr, i, i+1, i+2];
				tmpHTMLArr[tmpNum] = <MoviesRow key={tmpNum} moviesData={tmpData}/>;
				tmpNum++;
			}
		}
		
		return (<div className="container">{tmpHTMLArr}</div>);
	}
}

class MoviesRow extends Component{
	render(){
		console.log(this.props.moviesData);
		return (<div className="row">{this._createMovieCol()}</div>)
	}
	
	_createMovieCol(){
		return this.props.moviesData.map((data,idx) => {
			if(data === undefined) return (<div className="col"></div>)
			return ( <MoviesCol key={data.id} movie={data} /> );
		});
	}
} 

class MoviesCol extends Component{
	render(){
		let data = this.props.movie;
		return(
			<div className="wrap-movie-data col">
				<MoviesImg imgURL = {data.large_cover_image} title={data.title}/>
				<ul>
					<li className="title">{data.title}</li>
					<li className="rating">{data.rating}</li>
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