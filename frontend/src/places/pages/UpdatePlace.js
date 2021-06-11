import React from 'react'
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormComponents/Input';
import Button from '../../shared/components/FormComponents/Button'

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
  const placeId = useParams.placeId;

  const identifiesPlace = DUMMY_PLACES.find(d => d.id === placeId);

  if(!identifiesPlace){
    return(
      <div className="cener">
        <h1>No place to edit</h1>
      </div>
    )
  }

  return (
    <form>
      update Place
    </form>
  )
}

export default UpdatePlace
