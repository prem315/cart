//const initialState = {}
import { SET_ACTIVE_PRODUCT_ID } from '../actions/index';

export default function cart(state = null, action) {
    switch(action.type) {
        case SET_ACTIVE_PRODUCT_ID:
            return action.payload
        default:
            return state
    }
}