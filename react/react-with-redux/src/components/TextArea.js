import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../store/textReducer';

export function TextArea() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.textReducer.text);

  function handleChange(e) {
    dispatch(changeText(e.target.value));
  }

  return (
    <textarea onChange={handleChange} value={text}></textarea>
  )
}
