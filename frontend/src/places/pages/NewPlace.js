import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormComponents/Input';
import Button from '../../shared/components/FormComponents/Button'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    })
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs)
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        ErrorText="please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        ErrorText="please enter a valid description (atleast 5 character!)"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        ErrorText="please enter a address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  )
}

export default NewPlace;
