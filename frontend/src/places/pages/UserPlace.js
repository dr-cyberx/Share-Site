import React from 'react'
import PlaceList from '../components/PlaceList/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire state Building',
    description : 'One of the most famous sky scraper in the world',
    imageUrl : 'https://static.toiimg.com/thumb/71579199.cms?resizemode=75&width=1200&height=900',
    address : '20 W 34th St, New York, NY 10001, United States',
    location : {
      lat : '40.7484445',
      lng : '-73.9878531'
    },
    createrId : 'u1'
  },
  {
    id: 'p1',
    title: 'Empire state Building',
    description : 'One of the most famous sky scraper in the world',
    imageUrl : 'https://static.toiimg.com/thumb/71579199.cms?resizemode=75&width=1200&height=900',
    address : '20 W 34th St, New York, NY 10001, United States',
    location : {
      lat : '40.7484445',
      lng : '-73.9878531'
    },
    createrId : 'u2'
  },
]

const UserPlace = () => {
  return (
    <PlaceList items={DUMMY_PLACES}/>
  )
}

export default UserPlace
