import { combineReducers } from "redux";
import productReducer from "./ProductReducer";


const reducer = combineReducers(
    {
        allProducts:productReducer,
    }
);

export default reducer;