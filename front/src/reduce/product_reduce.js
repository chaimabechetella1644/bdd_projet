



const initialState = {
    productList: [],
  };
  
  const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, productList: action.payload };
      default:
        return state;
    }
  };
  
  // Create the Redux store
  
  
  export default ProductReducer;
  
  