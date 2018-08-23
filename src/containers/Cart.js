import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as Actions from '../actions';
import CartItem from '../components/CartItem';

class Cart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(!_.isEmpty(this.props.cart)){
            console.log(this.props.cart);
            const cart = _.values(this.props.cart);
            return(
                <div>
                {
                    cart.map((cartItem) => {
                        return <CartItem cartItem={cartItem} key={cartItem.menu_item_id}/>
                    })
                }
                </div>
                // <CartItem cartarr={_.values(cart)}/>
            )
        }else{
            return(
                <div>empty cart</div>
            )
        }
    }
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);