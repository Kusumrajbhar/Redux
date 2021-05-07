const initialState = 100;
const ChangeTheNumber = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':  return state + 1;
    case 'DECREMENT': return state - 1;
    case 'incrementFive': return state + action.payload
    default: return state; 
  }
}
export default ChangeTheNumber;

// const ChangeTheNumber = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return state + 1;
//   }
//   if (action.type === "DECREMENT") {
//     return state - 1;
//   }
//   if (action.type === 'incrementFive') {
//       return state + action.payload
//   }
// //   if (action.type === "MULTIPLY") {
// //     return state*2;
// //   }
// //   if (action.type === "DIVIDE") {
// //     return state/5;
// //   }
//   console.log("state", state);
//   return state;               //if not return state will give error that initial state is not defined 
// };

// export default ChangeTheNumber;
