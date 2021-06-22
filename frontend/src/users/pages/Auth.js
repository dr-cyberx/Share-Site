import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormComponents/Input';
import Button from '../../shared/components/FormComponents/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../shared/hooks/form.hooks';
import './Auth.css';

const Auth = () => {
  const [IsLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)


  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    if (!IsLoginMode) {
      setFormData({
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card
      className="authentication"
    >
      <h2>Login Required!</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {
          !IsLoginMode &&
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter your name"
            onInput={inputHandler}
          />
        }
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>{IsLoginMode ? 'LOGIN' : 'SIGN UP'}</Button>
      </form>
      <Button
        inverse
        onClick={switchModeHandler}
      >SWITCH TO {IsLoginMode ? 'SIGN UP' : 'LOGIN'}</Button>
    </Card>
  )
}

export default Auth;
