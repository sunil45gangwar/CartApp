// App wide dispatcher

import Actions from '../Actions/AppAction';
import Stores from '../Stores/stores';

const AppDispatcher = {
  setCartItem: (data: []) => {
    Stores.dispatch({type: Actions.ADD_TO_CART, data: data});
  },
};

export default AppDispatcher;
