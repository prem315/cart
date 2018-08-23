import React from 'react';

class GifsTemp extends React.Component {
	constructore(props){
	}

	gifItems() {
		return this.props.gifs.map(function(gif){
			return (
				<li key={gif.id}><img src={gif.url} /></li>
			)
		})
	}

	render(){
		return(
			<ul className="gif-list">{this.gifItems()}</ul>
		)
	}
}

// const GifsTemp = ({gifs}) => {
//   const gifItems = gifs.map((gif) => {
//     return(
//       <li key={gif.id}><img src={gif.url} /></li>
//     );
//   });

//   return (
//     <ul className="gif-list">{gifItems}</ul>
//   );
// };

export default GifsTemp;