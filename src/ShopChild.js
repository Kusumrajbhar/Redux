import React from "react";
import { connect } from 'react-redux';
import {dairyMilk, kitkat} from './action/Action'

function ShopChild(props) {
  return (
    <div>
      <h2>Child Shop - {props.itemProp}</h2>
      <button onClick={props.dispatchProp}>child</button>
    </div>
  );
}

//in this we used second paramter ownProps & this is accessing prop from parent  
//and we r putting condition if get prop from parent display this else this
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.ChocolateType   //if chocolateType(i.ereducer) loaded
    ? state.ChocolateType.dairymilk          //pass state of dairymil
    : state.ChocolateType.kitkat;            //else pass state of kitkat
    return {
        itemProp : itemState
    }
};

//to test provide this shopChild comp with chocolateType as props to see dairymilk else provide without
// without chocolateType as props to see kitkat 

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.ChocolateType
    ? () => dispatch(dairyMilk())
    : () => dispatch( kitkat())
    return {
        dispatchProp: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopChild); 
 //connect to connect shopChild react component with redux i.e mapStateToProps
