import Actions from '../Actions/AppAction';

interface AppState {
  cartData: []; 
}

const initialState: AppState = {
  cartData: [],
};

const AppReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case Actions.ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      };
    default:
      return state;
  }
};

export default AppReducer;
