import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form.hooks';
import Input from '../../shared/components/FormComponents/Input';
import Button from '../../shared/components/FormComponents/Button'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import './NewPlace.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire state Building',
    description: 'One of the most famous sky scraper in the world',
    imageUrl: 'https://static.toiimg.com/thumb/71579199.cms?resizemode=75&width=1200&height=900',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484445',
      lng: '-73.9878531'
    },
    createrId: 'u1'
  },
  {
    id: 'p1',
    title: 'Empire state Building',
    description: 'One of the most famous sky scraper in the world',
    imageUrl: 'https://static.toiimg.com/thumb/71579199.cms?resizemode=75&width=1200&height=900',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484445',
      lng: '-73.9878531'
    },
    createrId: 'u2'
  },
]

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const identifiesPlace = DUMMY_PLACES.find(d => d.id === placeId);

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false);

  React.useEffect(() => {
    if (identifiesPlace) {
      setFormData({
        title: {
          value: identifiesPlace.title,
          isValid: true
        },
        description: {
          value: identifiesPlace.description,
          isValid: true
        }
      });
    }
    setIsLoading(false)
  }, [setFormData, identifiesPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs)
  }

  if (!identifiesPlace) {
    return (
      <div className="center">
        <h1>Could not find Place</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        inititalValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        inititalValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
  )
}

export default UpdatePlace;
