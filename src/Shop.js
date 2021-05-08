import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dairyMilk, kitkat } from "./action/Action";
import { connect } from "react-redux";

function Shop(props) {
  return (
    <div>
      <h1>SHOP ITEMS DETAILS</h1>

      <h1>NumberOfDairymilk - {props.dairymilkProp}</h1>
      <button onClick={props.dairyMilkFunc}>Buycake</button>
      <br />
      <h1>NumberOfKitkat - {props.kitkatProp}</h1>
      <button onClick={props.kitkatFunc}>Buycake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dairymilkProp:state.ChocolateType.dairymilk,  //chocolateType is reducer storing 2 things i.e dairymilk and kitkat(storing state of dairymilk in [dairymilk property so that can access using props ])
    kitkatProp:state.ChocolateType.kitkat
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dairyMilkFunc: () => dispatch(dairyMilk()),  //dairyMilk() -- action
    kitkatFunc: () => dispatch(kitkat())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
