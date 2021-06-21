import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormComponents/Input';
import Button from '../../shared/components/FormComponents/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators';
import { useForm } from '../../shared/hooks/form.hooks';
import './Auth.css';

const Auth = () => {
  const [formState, inputHandler] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)
  return (
    <Card
      className="authentication"
    >
      <h2>Login Required!</h2>
      <hr />
      <form>
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

        <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
      </form>
    </Card>
  )
}

export default Auth;
