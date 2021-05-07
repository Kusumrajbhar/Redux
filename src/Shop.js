import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dairyMilk } from "./action/Action";
import { connect } from "react-redux";

function Shop(props) {
  return (
    <div>
      <h1>SHOP ITEMS DETAILS</h1>

      <h1>NumberOfDairymilk - {props.dairymilk}</h1>
      <button onClick={props.dairyMilk}>Buycake</button>
      <br />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dairymilk:state.dairymilk
    // numberOfIcecreams : state.numberOfIcecreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dairyMilk: () => dispatch(dairyMilk()),
    //buyicecream : () => dispatch(buyicecream),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
