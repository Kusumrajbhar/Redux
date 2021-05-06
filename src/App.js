import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux"; //useSelector same as consumer in context
import {
  incrementNumber,
  DecrementNumber,
  IncrementFive,
  multiply,
  divide
} from "./action/Action"; //we cannot call this function directly
import { text } from "./action/Action";
//functions can be called only with dispatch method
//dispatch triggers Action
//
function App() {
  const myState = useSelector((state) => state.ChangeTheNumber); //this changetheNumber reducer can called and used we get our state from here
  const myText = useSelector((state) => state.displayText);
  const muldiv = useSelector((state) => state. MulDiviNumber)
  const dispatch = useDispatch(); // useDispatch is a hook method

  return (
    <div className="App">
      <button onClick={() => dispatch(incrementNumber())}>Increment</button>
      <input value={myState} />
      <button onClick={() => dispatch(DecrementNumber())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(IncrementFive(5))}>
        IncrementFive-{myState}
      </button>
      <br />
      <button onClick={() => dispatch(multiply(2))}>
        Multiply-{muldiv}
      </button>
      <br />
      <button onClick={() => dispatch(divide(2))}>
        Divide-{muldiv}
      </button>
      <br />
      <button onClick={() => dispatch(text())}>{myText}</button>
    </div>
  );
}

export default App;
