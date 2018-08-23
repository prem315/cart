import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actions/index';
import _ from 'lodash';

export default function cart(state={total_price: 0}, action) {
    switch(action.type) {
        case ADD_TO_CART:
            const { menu_item_id, title, price, category } = action.payload;
            const menu_item_obj = state[menu_item_id];
            console.log(state);
            if(!_.isEmpty(menu_item_obj)) {
                if(menu_item_obj.hasOwnProperty('quantity')){
                    return {
                        ...state,
                        [menu_item_id]:{
                            title: title,
                            price: price,
                            category: category,
                            quantity: menu_item_obj.quantity + 1,
                            menu_item_id: menu_item_id,
                            total_item_price: price * (menu_item_obj.quantity + 1)
                        }
                    }
                }
            }
            else{
                return {
                    ...state,
                    [menu_item_id]: {
                        title: title,
                        price: price,
                        category: category,
                        quantity: 1,
                        menu_item_id: menu_item_id,
                        total_item_price: price
                    }
                }
            }

        case REMOVE_FROM_CART:
            // const { menu_item_id, title, price, category } = action.payload;
            const menu_item_id1 = action.payload.menu_item_id;
            const title1 = action.payload.title;
            const price1 = action.payload.price;
            const category1 = action.payload.category;
            const menu_item_obj1 = state[menu_item_id1];

            if(menu_item_obj1.quantity <= 1) {
                const newState = {
                    ...state
                }
                delete newState[menu_item_id1]
                return newState
            }else{
                return {
                    ...state,
                    [menu_item_id1]:{
                        title: title1,
                        price: price1,
                        category: category1,
                        quantity: menu_item_obj1.quantity - 1,
                        menu_item_id: menu_item_id1,
                        total_item_price: price1 * (menu_item_obj1.quantity - 1)
                    }
                }
            }
        default:
            return state
    }
}