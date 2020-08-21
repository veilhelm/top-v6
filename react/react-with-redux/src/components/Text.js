import React from 'react';
import { useSelector } from 'react-redux';

export function Text() {
  const text = useSelector(state => state.textReducer.text);

  return (
    <p>{text}</p>
  );
}
