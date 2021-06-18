import React from 'react';
import './PlaceList.css';
import Button from '../../../shared/components/FormComponents/Button';
import Card from '../../../shared/components/UIElements/Card';
import PlaceItem from '../PlaceItem/PlaceItem';


const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. May be create one ?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {
        items.map(place => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            createrId={place.creator}
            coordinates={place.location}
          />
        ))
      }
    </ul>
  )
}

export default PlaceList
