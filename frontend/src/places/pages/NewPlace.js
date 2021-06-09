import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormComponents/Input';
import Button from '../../shared/components/FormComponents/Button'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import "./NewPlace.css";

const formReducer = (state, actions) => {
  switch (actions.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.input) {
        if (inputId === actions.inputId) {
          formIsValid = formIsValid && actions.isValid;
        } else {
          formIsValid = formIsValid && state.input[inputId].isValid;
        }
      }
      return {
        ...state,
        input: {
          ...state.input,
          [actions.inputId]: { value: actions.value, isValid: actions.isValid }
        }
      };
    default:
      return state;
  }

}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    input: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        title: {
          value: '',
          isValid: false
        },
      }
    },
    isValid: false
  });

  const titleInputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type : 'INPUT_CHANGE',
      value: value,
      inputId: id,
      idValid: isValid
    })
  }, []);

  return (
    <form className="place-form">
      <Input
        id="input"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        ErrorText="please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        ErrorText="please enter a valid description (atleast 5 character!)"
        onInput={titleInputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  )
}

export default NewPlace;
