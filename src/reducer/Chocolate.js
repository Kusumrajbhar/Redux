const initialState = {
    dairymilk : 5,
    kitkat : 10
}

const ChocolateType = (state=initialState, action)=>{
 switch(action.type) {
     case 'DAIRYMILK' : return {
        ...state, 
        dairymilk:state.dairymilk + 1};
     case 'KITKAT' : return {
        ...state, 
        kitkat:state.kitkat - 1};
     default : return state
 }
}

export default ChocolateType;