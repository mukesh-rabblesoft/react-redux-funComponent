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


const selectedProductReducer = (state = {}, action) =>{
      switch(action.type){
        case ActionTypes.SELECT_PRODUCT:
            return {
                ...state,
                ...action.payload
            }
            case  ActionTypes.REMOVE_PRODUCT:
              return {}
            default:
             return state;

      }
};


export {productReducer, selectedProductReducer} ;
