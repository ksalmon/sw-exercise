
const Reducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'INDEX_PEOPLE':
      return {
          ...state,
          loading: false,
          people: state.people.concat(action.payload)
      };
    case 'SET_PERSON':
      return {
          ...state,
          loading: false,
          selectedPerson: action.payload
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: state.errors.concat(action.payload)
      };
    default:
        return state;
    }
};

export default Reducer;