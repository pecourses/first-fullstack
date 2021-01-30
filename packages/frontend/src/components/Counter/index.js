import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActionCreators from '../../actions/counterActionCreators';

const Counter = (props) => {
  const { value, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const { counterIncrement, counterDecrement, counterSetStep } = bindActionCreators(counterActionCreators, dispatch);

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={() => counterDecrement()}>-</button>
        <button onClick={() => counterIncrement()}>+</button>
      </div>
      <input type="number" value={step} onChange={({ target: { value } }) => counterSetStep(Number(value))} />
    </div>
  );
};

export default Counter;

// import React from 'react'
// import { connect } from 'react-redux'

// export const index = (props) => {
//   return (
//     <div>

//     </div>
//   )
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
