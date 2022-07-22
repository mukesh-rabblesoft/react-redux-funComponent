import ActionTypes from "../contents/ActionType";

const initialState = {
  Products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        Products:action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
