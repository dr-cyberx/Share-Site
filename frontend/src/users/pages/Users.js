import React from 'react';
import UserList from '../components/UserLIst/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Rahul singh',
      image: 'https://i.pinimg.com/originals/a5/0a/7b/a50a7b2ec630d3915e7a7f14c6fb9ec1.jpg',
      placeCount : 5,
    },
  ]

  return <UserList items={USERS} />
}

export default Users
