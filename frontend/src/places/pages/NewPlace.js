import React from 'react';

import Input from '../../shared/components/FormComponents/Input';
import {VALIDATOR_REQUIRE} from '../../utils/validators';
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        ErrorText="please enter a valid title"
      />
    </form>
  )
}

export default NewPlace;
