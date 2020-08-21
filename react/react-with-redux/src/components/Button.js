import React from 'react';
import { connect } from 'react-redux';
import { increaseCount } from '../store/countReducer';

function Button({ oneFunction }) {
  return (
    <button onClick={oneFunction}>Increase Count</button>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    oneFunction: () => dispatch(increaseCount(1))
  }
}


export default connect(null, mapDispatchToProps)(Button);
// export default Button;
