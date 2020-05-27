# MovieList
  * Open Api를 통해 React를 이용한 영화 목록 가지져오는 홈페이지.
  * Open Api 주소 : https://yts.lt/api/v2/list_movies.json?limit=
  
## Software
  * Ubuntu 14.04 LTS
  * Node 8.12.0
  * npm 6.4.1
  * expo-cli 2.2.0
  * React 16.8.6

## Display 1920px 
<img src="https://user-images.githubusercontent.com/20200820/82984989-294be180-a02e-11ea-800f-e2b70f26aac7.PNG" />

## Display 600px 
<img src="https://user-images.githubusercontent.com/20200820/82984941-0f120380-a02e-11ea-9494-ae5d848ff5ce.PNG" />

## Infinite Scroll Code
```javascript
_onScroll = (e) => {
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		this._getMovieData();
	}
}
```
