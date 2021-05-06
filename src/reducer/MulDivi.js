
const iniState = 100;
const MulDiviNumber = (state = iniState, action) => {
    if (action.type === "MULTIPLY") {
        return state * action.payload;
      }
      if (action.type === "DIVIDE") {
        return state / action.payload;
      }
      return state
}

export default MulDiviNumber