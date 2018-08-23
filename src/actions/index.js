//import request from '../../../../.cache/typescript/2.9/node_modules/@types/superagent';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const DISPLAY_MENU = 'DISPLAY_MENU';
export const REDUCE_CART_ITEM = 'REDUCE_CART_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_ACTIVE_PRODUCT_ID = 'SET_ACTIVE_PRODUCT_ID';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; 
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

// export function requestGifs(term = null) {
//     const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

//     return {
//         type: REQUEST_GIFS,
//         payload: data
//     }
// }

export const setActiveProductId = (id) => ({
    type: SET_ACTIVE_PRODUCT_ID,
    payload: id
})

export const addToCart = (menu_item) => ({
    type: ADD_TO_CART,
    payload: menu_item
})

export const removeFromCart = (menu_item) => ({
    type: REMOVE_FROM_CART,
    payload: menu_item
})

export const updateQuantity = (menu_item) => ({
    type: UPDATE_QUANTITY,
    payload: menu_item
})

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function signInUser() {
    return {
        type: SIGN_IN_USER
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    }
}

// cart actions

// export function addToCart({id, name, units}) {
//     return {
//         type: ADD_TO_CART,
//         payload: {id, name, units}
//     }
// }

export function updateCartItem({id, units}) {
    return {
        type: UPDATE_CART_ITEM,
        payload: {id, units}
    }
}

export function displayMenu() {
    return {
        type: DISPLAY_MENU,
    }
}

export function reduceCartItem(item) {
    return {
        type: REDUCE_CART_ITEM,
        payload: item
    }
}

export function deleteItem(item) {
    return{
        type: DELETE_ITEM,
        payload: item
    }
}