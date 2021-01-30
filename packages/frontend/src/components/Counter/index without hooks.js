import React from 'react';
import { connect } from 'react-redux';
import { counterDecrement, counterIncrement, counterSetStep } from '../../actions/counterActionCreators';

const Counter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { value, step, increment, decrement, setStep } = props;

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <input type="number" value={step} onChange={({ target: { value } }) => setStep(Number(value))} />
    </div>
  );
};

function mapStateToProps (state) {
  return state.counter;
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => { dispatch(counterIncrement()); },
    decrement: () => { dispatch(counterDecrement()); },
    setStep: (value) => { dispatch(counterSetStep(value)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

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
