import React, { useReducer, useEffect } from 'react';
import { validate } from '../../../utils/validators';
import './Input.css';

const inputReducer = (state, actions) => {
  switch (actions.type) {
    case 'CHANGES':
      return {
        ...state,
        value: actions.val,
        isValid: validate(actions.val, actions.validators)
      }
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      }
    default:
      return state;
  }
}

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false })

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGES',
      val: event.target.value,
      validators: props.validators,
    })
  }

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    })
  }

  const element = props.element === 'input' ?
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    /> :
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />

  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.ErrorText}</p>}
    </div>
  )
}

export default Input
