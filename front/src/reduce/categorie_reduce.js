

const initialState = {
  categorieList: [],
};

const CategorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categorieList: action.payload };
    default:
      return state;
  }
};

// Create the Redux store


export default CategorieReducer;

