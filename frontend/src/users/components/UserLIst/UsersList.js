import React from 'react';
import UserItem from '../UserItem/UserItem';
import './UsersList.css'

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h1>Sorry No User Found!</h1>
      </div>
    )
  }

  return (
    <ul className="users-list">
      {
        items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places} 
          />
        ))
      }
    </ul>
  )
}

export default UsersList
