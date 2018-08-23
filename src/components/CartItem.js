import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import _ from 'lodash';
import Cart from '../containers/Cart';

class CartItem extends React.Component{
	constructor(props){
		super(props);

	}

	handleMenuItemClick(id) {
		const { menu_item_id } = id;
		this.props.actions.setActiveProductId(menu_item_id);

		this.props.actions.addToCart(id);
	}

	reduceQuantity(id) {
		const { menu_item_id } = id;
		this.props.actions.setActiveProductId(menu_item_id);

		this.props.actions.removeFromCart(id);
	}

	renderMainScreen() {
		const { menu_item_id } = this.props.cartItem;
		let quantity = '';
		if(!_.isEmpty(this.props.cart[menu_item_id])){
			quantity = this.props.cart[menu_item_id].quantity;
		}
		console.log(quantity);
	
	
		if(quantity === '') {
			return (
				<div className="User" >
				{this.props.cartItem.title}  --->  {this.props.cartItem.price}
				<button onClick={this.handleMenuItemClick.bind(this, this.props.cartItem)}>ADD</button>
				</div>
			)
		}else{
			return (
				<div className="User" >
				{this.props.cartItem.title}  --->  {this.props.cartItem.price}
				<button onClick={this.reduceQuantity.bind(this, this.props.cartItem)}>-</button>
				{_.isEmpty(this.props.cart) ? '0' : quantity.toString() }
				<button onClick={this.handleMenuItemClick.bind(this, this.props.cartItem)}>+</button>
				</div>
			)
		}
	}

	render(){
		return (
			<div>
				{this.renderMainScreen()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
