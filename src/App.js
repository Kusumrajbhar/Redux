import logo from "./logo.svg";
import "./App.css";
import ReduxThunk from "redux-thunk";
import { useSelector, useDispatch } from "react-redux"; //useSelector same as consumer in context
import {
  incrementNumber,
  DecrementNumber,
  IncrementFive,
  multiply,
  divide,
  text,
  dairyMilk,
  kitkat 
} from "./action/Action"; //we cannot call this function directly
import Shop from "./Shop";
import ShopChild from "./ShopChild";
//useSelector gives state
//functions can be called only with dispatch method
//dispatch triggers Action
//
function App() {
  const myState = useSelector((state) => state.ChangeTheNumber); //this changetheNumber reducer can called and used we get our state from here
  const myText = useSelector((state) => state.displayText);
  const muldiv = useSelector((state) => state.MulDiviNumber);
  const dairyMilkChoco = useSelector((state) => state.ChocolateType.dairymilk);
  const kitkatChoco = useSelector((state) => state.ChocolateType.kitkat)
  const dispatch = useDispatch(); // useDispatch is a hook method
  console.log("myState", myState);

  return (
    <div className="App">
      {/* <ShopChild  ChocolateType/>
      <ShopChild /> */}
      {/* <Shop /> */}
      {/* <button onClick={() => dispatch(incrementNumber())}>Increment</button>
      <input value={myState} />
      <button onClick={() => dispatch(DecrementNumber())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(IncrementFive(5))}>
        IncrementFive-{myState}
      </button>
      <br />
      <button onClick={() => dispatch(multiply(2))}>Multiply-{muldiv}</button>
      <br />
      <button onClick={() => dispatch(divide(2))}>Divide-{muldiv}</button>
      <br />
      <button onClick={() => dispatch(text())}>{myText}</button><br/> <br/>
      <h3>CHOCOLATE COUNT</h3>
      <div> 
      <button onClick={() => dispatch(dairyMilk())}>dairyMilk - {dairyMilkChoco}</button>
      <button onClick={() => dispatch(kitkat())}>kitkat - {kitkatChoco}</button>
      </div> */}
    </div>
  );
}

export default App;
