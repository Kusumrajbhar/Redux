export const incrementNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const DecrementNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const IncrementFive = (num) => {
    return {
      type: "incrementFive",
      payload: num
    };
  };

export const text = () => {
  return { type: "text" };
};

export const multiply = (num) => {
    return {
      type: "MULTIPLY",
      payload: num
    };
  };
  
  export const divide = (num) => {
    return {
      type: "DIVIDE",
      payload: num
    };
  };

//dispatch(IncrementFive(5) 
// const IncrementFive = (num) => {  * num = 5 *
// payload: num
//if (action.type === 'incrementFive') {
//     return state + action.payload
// }
//state + action.payload  --- state + 5
