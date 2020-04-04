import {combineReducers} from "redux"
import rootreducer from "./reducer/reducer"

export default combineReducers({
    item: rootreducer
})