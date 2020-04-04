import {ADD_ITEMS, REMOVE_ITEMS, SUB_ITEMS} from "../constants/constants"

const initialState = {
    item: []
  };

export default function(state = initialState, action){

    switch(action.type){
        case ADD_ITEMS:
            return{
                ...state,
                item: action.payload
            }
        case REMOVE_ITEMS:
            return{
                ...state,
                item: action.payload
            }
        case SUB_ITEMS:
            return{
                ...state,
                item: action.payload
            }
        default: return state;
    }
}