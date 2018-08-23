import { ADD_TO_CART, UPDATE_CART_ITEM, REDUCE_CART_ITEM, DISPLAY_MENU, DELETE_ITEM } from '../actions';

const initialState = {
    items: {
        "JUIZn-VyX": {
            title: "Veg Pizza",
            price: 200,
            category: "Pizza",
            menu_item_id: "JUIZn-VyX"
        },
        "GJIZn-VyY": {
            title: "Italian Pizza",
            price: 240,
            category: "Pizza",
            menu_item_id: "GJIZn-VyY"
        },
        "MHIZn-VyA": {
            title: "Red Pasta",
            price: 120,
            category: "Pasta",
            menu_item_id: "MHIZn-VyA"
        },
        "HPIZn-VyD": {
            title: "White Pasta",
            price: 100,
            category: "Pasta",
            menu_item_id: "HPIZn-VyD"
        }
    }
}

export default function cart(state = initialState, action) {

    return state;
    // switch (action.type) {
    //     case DISPLAY_MENU:
    //         //const newState = Object.assign({}, state);
    //         return {
    //             ...state.menu
    //         }
    //     case ADD_TO_CART:
    //     console.log(action.payload)
    //         return { 
    //             ...state, 
    //             cart: [...state.cart, action.payload] 
    //         };
    //     case UPDATE_CART_ITEM:
    //         let existingItemIndex = state.cart.findIndex((p) => p.id === action.payload.id);    
    //         console.log(existingItemIndex);
    //         if (state.cart[existingItemIndex].units === 0 && action.payload.units === -1) {
    //             break;
    //         }
    //         state.cart[existingItemIndex].units += action.payload.units;
    //         console.log(state.cart[existingItemIndex].units);
    //         return state
        
    //     default:
    //         return state;
    // }

}