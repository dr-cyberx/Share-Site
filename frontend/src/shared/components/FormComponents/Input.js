import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, actions) => {
  switch (actions.type) {
    case 'CHANGES':
      return {
        ...state,
        value: actions.value,
        isValid: true
      }
    default:
      return state;
  }
}

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false })

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGES',
      val: event.target.value
    })
  }

  const element = props.element === 'input' ?
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      value={inputState.value}
    /> :
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={changeHandler}
      value={inputState.value}
    />

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  )
}

export default Input
