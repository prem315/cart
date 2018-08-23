import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as Actions from '../actions';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import Cart from '../containers/Cart';
import '../Styles/app.css';

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

  	render() {
		const menu = this.props.menu;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
					Menu
					<Menu menu={_.values(menu)} />
					</div>
					<div className="col-md-6">
					<Cart />
					</div>
				</div>
			</div>
		);
  	}
}

function mapStateToProps(state) {
	return {
		gifs: state.gifs.data,
		modalIsOpen: state.modal.modalIsOpen,
		selectedGif: state.modal.selectedGif,
		//cart: state.cart.cart,
		menu: state.menu.items
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);