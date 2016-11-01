const initialState = {
  addedList: [],
  quantity: {}
}

const addedList = (state = initialState.addedLIst, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.includes(action.id)) {
        return state;
      }
      return [ ...state, action.id ];
    default:
      return state;
  }
};

const quantity = (state = initialState.quantity, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id } = action;
      return { ...state,
        [id]: (state[id] || 0) + 1
      };
    default:
      return state;
  }
};


const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState;
    case 'CHECKOUT_FAILURE':
      return action.cart;
    default:
      return {
        addedList: addedList(state.addedList, action),
        quantity: quantity(state.quantity, action)
      }
  }
}



export default cart


export const getProductsAdded=(addedList,products)=>{

return products.filter(product=>addedList.includes(product.id));


};

