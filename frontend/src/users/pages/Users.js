import React from 'react';
import UserList from '../components/UserLIst/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Rahul singh',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fwweromanreigns%2Fstatus%2F1370441728688328704&psig=AOvVaw3qlotZ048gNskErf6fRZ59&ust=1622704977181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiruKO1-PACFQAAAAAdAAAAABAK',
      placeCount : 5,
    },
  ]

  return <UserList items={USERS} />
}

export default Users
