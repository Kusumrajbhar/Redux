const initialState = 100;

const ChangeTheNumber = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === 'incrementFive') {
      return state + action.payload
  }
//   if (action.type === "MULTIPLY") {
//     return state*2;
//   }
//   if (action.type === "DIVIDE") {
//     return state/5;
//   }
  console.log("state", state);
  return state;               //if not return state will give error that initial state is not defined 
};

export default ChangeTheNumber;
