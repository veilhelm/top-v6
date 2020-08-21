import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  console.log(props)
  return (
    <span>{props.oneProp}</span>
  );
}

function mapStateToProps(state) {
  return {
    oneProp: state.countReducer.count,
  };
}

export default connect(mapStateToProps)(Counter);
