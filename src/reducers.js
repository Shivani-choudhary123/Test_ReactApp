
const initialState = {
    newquotes: [],  
  };
  
  const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AddQuote':
        return { ...state, newquotes: [...state.newquotes, action.payload] }; 
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  